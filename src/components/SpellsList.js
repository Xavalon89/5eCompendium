import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { withNavigation } from 'react-navigation';


// this no longer has memo (look at monster or equip to restore(bottom and top))
const SpellsList = React.memo(function SpellsList({ level, navigation, footer, term }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let stillMounted = { value: false }
  useEffect(() => {
    stillMounted.value = true
    return () => (stillMounted.value = false)
  }, [])

  if (!stillMounted.value) {
    useEffect(() => {
      fetch(`https://www.dnd5eapi.co/api/spells/?level=${level}&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  }


  console.log(stillMounted.value)

  // spells/?level=0&&name=Acid+Splash this here works
  // if I can get this to work, use function to replace ' ' in string with '+'


  var section = '';
  switch (level) {
    case 0:
      section = 'Cantrip';
      break;
    case 1:
      section = '1st Level';
      break;
    case 2:
      section = '2nd Level';
      break;
    case 3:
      section = '3rd Level';
      break;
    default:
      section = `${level}th Level`;
  }


  // add searchbar to header?
  const Header = () => {
    return (
      <>
        <Text style={styles.level}>{section}</Text>
      </>
    )
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={Header}
        ListFooterComponent={footer}
        data={data.results}
        keyExtractor={(item, index) => item.index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SpellShow', { id: item.index, section: section })}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
});

const styles = StyleSheet.create({
  button: {
    borderBottomWidth: 2,
    borderColor: 'black',
    padding: 12,
    // backgroundColor: '#f5f5f0',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  level: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#eaeae1',
    borderBottomWidth: 2,
    // borderColor: 'grey',
    fontWeight: 'bold',
    padding: 8,
  }
});

export default withNavigation(SpellsList);
