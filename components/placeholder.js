import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Placeholder({ icon, headerText, subText }) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.headerText}>{headerText}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    paddingTop: 50
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
  },
  subText: {
    color: '#777',
    margin: 10,
    textAlign: 'center'
  }
});