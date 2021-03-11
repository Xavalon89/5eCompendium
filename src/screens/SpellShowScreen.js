import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';

const SpellShowScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const id = navigation.getParam('id');
  const section = navigation.getParam('section');

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/spells/${id}`)
      .then((response) => response.json())
      .then((json) => setResult(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // for whatever reason, result.level will not work with conditional
  // solution: change the conditional to result.spell >= 0
  // not a big problem since all spells contain this property

  if (result.ritual == true) {
    var ritual = '(ritual)'
  } else {
    var ritual = ''
  }

  if (result.concentration == true) {
    var concentration = 'Concentration -'
  } else {
    var concentration = ''
  }

  if (result.classes) {
    var classes = result.classes.map(value => value.name)
    classes = classes.join(', ')
  }

  if (result.material) {
    var material = '(' + result.material + ')'
  }

  return (
    <ScrollView style={styles.view} nestedScrollEnabled={true}>
      <Text style={styles.class}>{result.name}</Text>
      {result.school && section == 'Cantrip' && <Text style={styles.type}>{result.school.name} {section}</Text>}
      {result.school && section != 'Cantrip' && <Text style={styles.type}>{section} {result.school.name} {ritual}</Text>}
      {result.casting_time && <Text style={styles.data}>Casting Time: {result.casting_time}</Text>}
      {result.range && <Text style={styles.data}>Range: {result.range}</Text>}
      {result.components && <Text style={styles.data}>Components: {result.components.join(' ')} {material}</Text>}
      {result.duration && <Text style={styles.data}>Duration: {concentration} {result.duration}</Text>}
      {result.desc && <Text style={styles.data}>{result.desc}</Text>}
      {result.higher_level && <Text style={styles.data}>Higher Level: {result.higher_level}</Text>}
      {result.classes && <Text style={styles.data}>Available for: {classes}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  class: {
    fontSize: 24,
    padding: 5,
    borderBottomWidth: 2,
    // borderColor: '#cc0000',
    backgroundColor: '#eaeae1',
    textAlign: 'center',
    color: 'black'
  },
  data: {
    fontSize: 16,
    margin: 10,
  },
  type: {
    fontSize: 16,
    margin: 10,
    textAlign: 'right',
    fontStyle: 'italic',
    textTransform: 'lowercase',
  },
  view: {
    // backgroundColor: '#d6d6c2'
  }
});

export default SpellShowScreen;
