import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import SpellsList from '../components/SpellsList';
import SearchBar from '../components/SearchBar';

const SpellsScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  // const [term, setterm] = useState('')


  // making the searchbar scrollable, just put in header of first spelllist... thi causes rerender on every changed word
  console.log(term)

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
      />
      <SpellsList level={0} key={term} term={term}
        footer={<SpellsList level={1} key={term} term={term}
        footer={<SpellsList level={2} key={term} term={term}
        footer={<SpellsList level={3} key={term} term={term}
        footer={<SpellsList level={4} key={term} term={term}
        footer={<SpellsList level={5} key={term} term={term}
        footer={<SpellsList level={6} key={term} term={term}
        footer={<SpellsList level={7} key={term} term={term}
        footer={<SpellsList level={8} key={term} term={term}
        footer={<SpellsList level={9} key={term} term={term}
      />}/>}/>}/>}/>}/>}/>}/>}/>}/>
    </View>
  )
}


const styles = StyleSheet.create({});

export default SpellsScreen;
