import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import MonstersList from '../components/MonstersList';

const MonstersScreen = ({ navigation }) => {

  return (
    <View>
      <MonstersList challenge={0}
        footer={<MonstersList challenge={0.125}
        footer={<MonstersList challenge={0.25}
        footer={<MonstersList challenge={0.5}
        footer={<MonstersList challenge={1}
        footer={<MonstersList challenge={2}
        footer={<MonstersList challenge={3}
        footer={<MonstersList challenge={4}
        footer={<MonstersList challenge={5}
        footer={<MonstersList challenge={6}
        footer={<MonstersList challenge={7}
        footer={<MonstersList challenge={8}
        footer={<MonstersList challenge={10}
        footer={<MonstersList challenge={11}
        footer={<MonstersList challenge={12}
        footer={<MonstersList challenge={13}
        footer={<MonstersList challenge={14}
        footer={<MonstersList challenge={14}
        footer={<MonstersList challenge={15}
        footer={<MonstersList challenge={16}
        footer={<MonstersList challenge={17}
        footer={<MonstersList challenge={19}
        footer={<MonstersList challenge={20}
        footer={<MonstersList challenge={21}
        footer={<MonstersList challenge={22}
        footer={<MonstersList challenge={23}
        footer={<MonstersList challenge={24}
        footer={<MonstersList challenge={30}
      />}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  text: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    alignSelf: 'center'
  }
});

export default MonstersScreen;
