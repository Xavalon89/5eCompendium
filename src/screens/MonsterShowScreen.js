import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';

const MonsterShowScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const id = navigation.getParam('id');

  useEffect(() => {
    fetch(`https://api.open5e.com/monsters/${id}`)
      .then((response) => response.json())
      .then((json) => setResult(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  // werecreatures are not giving any data from fetch for some reason
  return (
    <ScrollView style={styles.view} nestedScrollEnabled={true}>
      <Text style={styles.class}>{result.name}</Text>
      {result.armor_class && <Text style={styles.data}>AC: {result.armor_class}</Text>}
      {result.size && <Text style={styles.data}>Size: {result.size}</Text>}
      {result.challenge_rating && <Text style={styles.data}>Challenge Rating: {result.challenge_rating}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  class: {
    fontSize: 24,
    padding: 5,
    borderBottomWidth: 2,
    backgroundColor: '#eaeae1',
    textAlign: 'center',
  },
  data: {
    margin: 10,
    fontSize: 16
  },
  view: {
    // backgroundColor: 'lightgrey'
  }
});

export default MonsterShowScreen;
