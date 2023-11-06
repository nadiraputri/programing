import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Home from './src/components/Home';
import Foto from './src/components/Foto';
import Profile from './src/components/Profile';
const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#bdbdbd',
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderRadius: 9,
          backgroundColor: '#FFFFFF',
          elevation: 2,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Home' ? '#8B4513' : '#FFFFFF',
            elevation: activeMenu == 'Home' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Home')}>
          <Text style={{color: activeMenu == 'Home' ? '#FFFFFF' : '#DAA520'}}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Foto' ? '#8B4513' : '#FFFFFF',
            elevation: activeMenu == 'Foto' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Foto')}>
          <Text style={{color: activeMenu == 'Foto' ? '#FFFFFF' : '#DAA520'}}>
            Foto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Profile' ? '#8B4513' : '#FFFFFF',
            elevation: activeMenu == 'Profile' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Profile')}>
          <Text
            style={{color: activeMenu == 'Profile' ? '#FFFFFF' : '#DAA520'}}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Foto' && <Foto />}
      {activeMenu == 'Profile' && <Profile />}
    </View>
  );
};

export default App;