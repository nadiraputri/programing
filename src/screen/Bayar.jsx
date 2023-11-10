import React, {useState, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';

const Foto = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E0FFFF', alignItems:'center'}}>
      <Text style={{fontSize: 22, color: '#000000'}}>Butik Kita</Text>
    </View>
  );
};

export default Foto;