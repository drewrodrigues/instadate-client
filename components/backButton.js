import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/*
Example usage:
  <BackButton {...props } />

We do this so we have access to the navigator.
 */

export default function BackButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.navigation.goBack()}>
      <Text style={styles.text}>{'< Back'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 35,
    position: 'absolute',
    top: 60,
    zIndex: 100,
  },
  text: {
    color: '#777',
  },
});
