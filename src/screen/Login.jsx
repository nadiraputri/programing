import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Input from '../components/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // ini penyimpanan sementara
    this.state = {
      nama: '',
      alamat: '',
      nope: '',
    };
  }

  render() {
    // destrukturisasi
    const {nama, alamat, nope} = this.state;
    return (
      <View style={styles.box}>
        <Text> Login terlebih dahulu </Text>
        <Input
          placeholder={'isi nama'}
          onChangeText={isi => this.setState({mana: isi})}
        />
        <Input 
          placeholder={'Isi alamat'} 
          onChangeText={isi => this.setState({mana: isi})}
        />
        <Input
          placeholder={'Isi no hp'}
          InputMode={'numeric'}
          onChangeText={isi => this.setState({nope: isi})}
        />
        <Text>
          Nama: {nama}</Text>
        <Text>Alamat: {alamat}</Text>
        <Text>No HP: {nope}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    Backgroundcolor: 'Black',
    flex: 1,
  },
});