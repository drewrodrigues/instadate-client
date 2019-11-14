import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export default function FormTextInput({
  placeholder,
  secureTextEntry = false,
  value,
  updateCallback,
  noteText,
  extraStyles,
  multiline
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ placeholder }</Text>
      {noteText && <Text style={styles.noteText}>{noteText}</Text>}
      <TextInput
        onChangeText={changedValue => updateCallback(changedValue)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{ ...styles.input, ...extraStyles }}
        value={value}
        multiline={multiline}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  noteText: {
    position: 'absolute',
    color: '#777',
    fontSize: 12,
    right: 0,
    top: 0
  },
  label: {
    color: 'white',
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    padding: 20
  }
});