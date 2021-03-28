import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import ClipBoard from 'expo-clipboard';
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ123456789!@#$%&_?'

export default function App() {
  const [password, setPassaword] = useState('');
  const [size, setSize] = useState(5);

  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassaword(pass);
  }
  function copyPass(){
    ClipBoard.setString(password);
    alert('Senha copiada!');
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/icon_password.png')}
        style={styles.logo}
      />
      <Text style={styles.title}> {size} Caracteres </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}



        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
        </View>
      )}


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff'
  },
  logo: {
    marginBottom: 10,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "white",
    width: '80%',
    borderRadius: 7,
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }
});