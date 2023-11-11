import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = () => {
  return (
    <View style={styles.kotakInput}>
      <TextInput placeholder="Ketik nama disini" inputMode="email" />
    </View>
    
  );
};

export default Input;

const styles = StyleSheet.create({
  kotakInput: {
    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
});