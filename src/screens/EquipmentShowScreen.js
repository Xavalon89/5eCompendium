import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';

const EquipmentShowScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const id = navigation.getParam('url');

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co${id}`)
      .then((response) => response.json())
      .then((json) => setResult(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (result.armor_class && result.armor_class.dex_bonus == true && result.armor_class.max_bonus != null) {
    var dex = '+ Dex modifier ' + '(max ' + result.armor_class.max_bonus + ')'
  } else if (result.armor_class && result.armor_class.dex_bonus == true) {
    var dex = '+ Dex'
  }
  else {
    var dex = ''
  }

  // {result && result.desc && <Text style={styles.data}>{result.desc}</Text>}
  // removed result &&. Don't think it is necessary
  // like result.level for spells result.weight is causing problems in the conditional -> antitoxin
  // solved with >=
  // packs are going to require a different way to show their contents
  return (
    <ScrollView style={styles.view} nestedScrollEnabled={true}>
      <Text style={styles.class}>{result.name}</Text>
      {result.desc && result.desc[0] && <Text style={styles.data}>{result.desc[0]}</Text>}
      {result.desc && result.desc[1] && <Text style={styles.data}>{result.desc[1]}</Text>}
      {result.quantity && <Text style={styles.data}>Quantity: {result.quantity}</Text>}
      {result.armor_category && <Text style={styles.data}>Type: {result.armor_category}</Text>}
      {result.weight >= 0 && <Text style={styles.data}>Weight: {result.weight} lb.</Text>}
      {result.armor_class && <Text style={styles.data}>AC: {result.armor_class.base} {dex}</Text>}
      {result.str_minimum > 0 && <Text style={styles.data}>Strength Requirement: {result.str_minimum}</Text>}
      {result.stealth_disadvantage == true && <Text style={styles.data}>Stealth: Disadvantage</Text>}
      {result.cost && <Text style={styles.data}>Cost: {result.cost.quantity} {result.cost.unit}</Text>}
      {result.damage && <Text style={styles.data}>Damage: {result.damage.damage_dice} {result.damage.damage_type.name}</Text>}
      {result.properties && <Text style={styles.data}>Properties: {result.properties.name}</Text>}
      {result.contents && <Text style={styles.data}>{result.contents.map(value => value.item.name + ' ' + 'x' + value.quantity + '\n')}</Text>}
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

export default EquipmentShowScreen;
