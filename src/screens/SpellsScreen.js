import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import SpellsList from '../components/SpellsList';
import SearchBar from '../components/SearchBar';
import useSpells from '../hooks/useSpells';

const SpellsScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, spells, spells1, spells2, spells3, spells4, spells5, spells6, spells7, spells8, spells9, errorMessage] = useSpells(); //searchapi just give \

  return (
    <>
      <SpellsList  spells={spells} level={0} searchy={<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />}
        footer={<SpellsList spells={spells1} level={1}
        footer={<SpellsList spells={spells2} level={2}
        footer={<SpellsList spells={spells3} level={3}
        footer={<SpellsList spells={spells4} level={4}
        footer={<SpellsList spells={spells5} level={5}
        footer={<SpellsList spells={spells6} level={6}
        footer={<SpellsList spells={spells7} level={7}
        footer={<SpellsList spells={spells8} level={8}
        footer={<SpellsList spells={spells9} level={9}
      />}/>}/>}/>}/>}/>}/>}/>}/>}/>
    </>
  )
}

const styles = StyleSheet.create({});

export default SpellsScreen;
