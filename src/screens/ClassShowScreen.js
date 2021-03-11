// backup and go back to other api >>>> same for race
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ClassShowScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [features, setFeatures] = useState([]);
  const id = navigation.getParam('id');

  // additional useEffects for states of features & subclasses

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/classes/${id}`)
      .then((response) => response.json())
      .then((json) => setResult(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/classes/${id}/features`)
      .then((response) => response.json())
      .then((json) => setFeatures(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // features will likely have to be there own component with flatlist
  if (features.results) {
    var feat = features.results.map(value => value.name)
    feat = feat.join(', ')
  }


  return (
    <ScrollView>
      <Text style={styles.class}>{result.name}</Text>
      {result.name == 'Barbarian' && <Image style={styles.image} source={require('../../assets/class-pics/barbarian.png')} />}
      {result.name == 'Bard' && <Image style={styles.image} source={require('../../assets/class-pics/bard.png')} />}
      {result.name == 'Cleric' && <Image style={styles.image} source={require('../../assets/class-pics/cleric.png')} />}
      {result.name == 'Druid' && <Image style={styles.image} source={require('../../assets/class-pics/druid.png')} />}
      {result.name == 'Fighter' && <Image style={styles.image} source={require('../../assets/class-pics/fighter.png')} />}
      {result.name == 'Monk' && <Image style={styles.image} source={require('../../assets/class-pics/monk.png')} />}
      {result.name == 'Paladin' && <Image style={styles.image} source={require('../../assets/class-pics/paladin.png')} />}
      {result.name == 'Ranger' && <Image style={styles.image} source={require('../../assets/class-pics/ranger.png')} />}
      {result.name == 'Rogue' && <Image style={styles.image} source={require('../../assets/class-pics/rogue.png')} />}
      {result.name == 'Sorcerer' && <Image style={styles.image} source={require('../../assets/class-pics/sorcerer.png')} />}
      {result.name == 'Warlock' && <Image style={styles.image} source={require('../../assets/class-pics/warlock.png')} />}
      {result.name == 'Wizard' && <Image style={styles.image} source={require('../../assets/class-pics/wizard.png')} />}
      <View style={styles.data}>
        <Text>HIT POINTS</Text>
        {result.hit_die && <Text>Hit Dice: 1d{result.hit_die} per {result.name} level</Text>}
        {result.hit_die && <Text>Hit Points at 1st Level: {result.hit_die} + Constitution modifier</Text>}
        {result.hit_die && <Text>Hit Points at Higher Levels: 1d{result.hit_die} (or {result.hit_die / 2 + 1}) + Constituion modifier</Text>}
      </View>
      <View style={styles.data}>
        <Text>STARTING PROFICIENCIES</Text>
        {result.proficiencies && <Text>{result.hit_die}</Text>}
      </View>
      <View style={styles.data}>
        <Text>FEATURES</Text>
        {features && <Text>{feat}</Text>}
      </View>
    </ScrollView>
  );
};


// <View style={styles.data}>
//   <Text>PROFICIENCIES</Text>
//   <Text>Armor: {result.prof_armor}</Text>
//   <Text>Weapons: {result.prof_weapons}</Text>
//   <Text>Tools: {result.prof_tools}</Text>
//   <Text>Saving Throws: {result.prof_saving_throws}</Text>
//   <Text>Skills: {result.prof_skills}</Text>
// </View>
// <View style={styles.data}>
//   <Text>STARTING EQUIPMENT</Text>
//   <Text>{result.equipment}</Text>
// </View>
// <View style={styles.data}>
//   <Text>CLASS ABILITIES</Text>
//   <Text>{desc}</Text>
// </View>
// <Text numberOfLines={1} ellipsizeMode='tail'>
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// </Text>


const styles = StyleSheet.create({
  class: {
    fontSize: 24,
    padding: 5,
    borderBottomWidth: 2,
    backgroundColor: '#eaeae1',
    textAlign: 'center',
  },
  image: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 10,
    height: 600,
    width: 400,
  },
  data: {
    margin: 10,
  },
  view: {
    // backgroundColor: 'lightgrey'
  }
});

export default ClassShowScreen;
