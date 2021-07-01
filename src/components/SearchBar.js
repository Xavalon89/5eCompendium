// searchbar can pass a prop which can be appended to fetch statement
// this may not work when trying to search my separated lists

// or I can create a search screen that brings directly to the show screen

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import SpellsList from '../components/SpellsList';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        blurOnSubmit={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // marginVertical: 2,
    // marginHorizontal: 2,
    backgroundColor: 'rgb(230,230,230)',
    height: 50,
    // borderRadius: 10,
    flexDirection: 'row',
    //borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black' //#fcba03
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
    flexDirection: 'row'
  }
});

export default SearchBar
