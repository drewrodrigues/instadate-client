import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LoadingGif from '../assets/loading.gif';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image source={LoadingGif} style={styles.gif} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    height: 150,
    width: 150,
  },
  text: {
    color: '#777',
    fontSize: 14,
  },
});
