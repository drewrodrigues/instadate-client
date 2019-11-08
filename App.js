import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Registration from "./features/registration";
import axios from 'axios';

export default function App() {
  return (
    <View style={styles.container}>
      <Registration />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
