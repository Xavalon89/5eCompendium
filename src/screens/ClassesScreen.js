import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Accordion } from 'native-base';

const ClassesScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/classes')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.view}>
      <FlatList
        data={data.results}
        keyExtractor={(item, index) => item.index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassShow', { id: item.index })}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderBottomWidth: 2,
    borderColor: 'grey',
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
  },
  view: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  }
});

export default ClassesScreen;
