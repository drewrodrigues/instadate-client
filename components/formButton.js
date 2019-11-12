import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FormButton({
  color = 'red',
  fontWeight = '400',
  handleSubmit,
  text
}) {
  return (
    <TouchableOpacity onPress={handleSubmit} style={{ ...styles.button, backgroundColor: color }}>
      <Text style={{ ...styles.text, fontWeight }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginTop: 20,
    padding: 20
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
});