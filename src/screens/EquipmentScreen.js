import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import EquipmentList from '../components/EquipmentList';

const EquipmentScreen = ({ navigation }) => {

  return (
    <View>
      <EquipmentList category={'armor'}
        footer={<EquipmentList category={'weapon'}
        footer={<EquipmentList category={'adventuring-gear'}
        footer={<EquipmentList category={'wondrous-items'}
      />}/>}/>}/>
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

export default EquipmentScreen;
