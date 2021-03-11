import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

const MonstersList = React.memo(function MonstersList({ challenge, navigation, footer }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters//?challenge_rating=${challenge}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const Header = () => {
    return (
      <Text style={styles.level}>CR {challenge}</Text>
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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MonsterShow', { id: item.index })}>
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
    // borderColor: 'grey',
    padding: 12,
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

export default withNavigation(MonstersList);
