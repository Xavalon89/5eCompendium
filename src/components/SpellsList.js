import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { withNavigation } from 'react-navigation';
import SearchBar from '../components/SearchBar';
import useSpells from '../hooks/useSpells';



// switch back from spells to level in props if broke
const SpellsList = React.memo(function SpellsList({ spells, navigation, footer, level, searchy }) {
  const [searchApi, errorMessage] = useSpells();
  const [term, setTerm] = useState('');
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const [newTerm, setNewTerm] = useState(term);

  // useEffect(() => {
  //   fetch(`https://www.dnd5eapi.co/api/spells/?level=${level}&&name=${newTerm}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);


  // spells/?level=0&&name=Acid+Splash this here works


  var section = '';
  switch (level) {
    case 0:
      section = 'Cantrips';
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

  const renderHeader = () => {
    return (
      <>
        {searchy}
        <Text style={styles.level}>{section}</Text>
      </>
    )
  }

  return (
    <>
      <FlatList
        removeClippedSubviews={false}
        ListHeaderComponent={renderHeader()}
        ListFooterComponent={footer}
        data={spells.results}
        keyExtractor={(item, index) => item.index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SpellShow', { id: item.index, section: section })}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
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
