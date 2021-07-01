import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, Image } from 'react-native';

const RaceShowScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const id = navigation.getParam('id');

  useEffect(() => {
    fetch(`https://api.open5e.com/races/${id}`)
      .then((response) => response.json())
      .then((json) => setResult(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={styles.view} nestedScrollEnabled={true}>
      <Text style={styles.class}>{result.name}</Text>
      <Text style={styles.data}>{result.desc}</Text>
      <Text style={styles.data}>{result.asi_desc}</Text>
      <Text style={styles.data}>{result.speed_desc}</Text>
      <Text style={styles.data}>{result.vision}</Text>
      <Text style={styles.data}>{result.age}</Text>
      <Text style={styles.data}>{result.size}</Text>
      <Text style={styles.data}>{result.languages}</Text>
      <Text style={styles.data}>{result.traits}</Text>
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
  },
  view: {
    // backgroundColor: 'lightgrey'
  }
});

export default RaceShowScreen;
