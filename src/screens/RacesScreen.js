import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const RacesScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/races')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <FlatList
      data={data.results}
      keyExtractor={(item, index) => item.index}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RaceShow', { id: item.index })}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    borderBottomWidth: 2,
    // borderColor: 'grey',
    padding: 12,
    // backgroundColor: '#f5f5f0',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    alignSelf: 'center'
  }
});

export default RacesScreen;
