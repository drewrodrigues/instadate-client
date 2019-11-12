import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export default function FormTextInput({
  placeholder,
  secureTextEntry = false,
  value,
  updateCallback
}) {
  return (
    <View>
      <Text style={styles.label}>{ placeholder }</Text>
      <TextInput
        onChangeText={changedValue => updateCallback(changedValue)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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