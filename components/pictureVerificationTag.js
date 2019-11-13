import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function PictureVerificationTag({ verified }) {
  if (verified === undefined) return null;

  let backgroundColor, text;

  if (verified) {
    backgroundColor = 'green';
    text = 'Verified';
  } else {
    backgroundColor = 'red';
    text = 'Pending Verification'
  }

  return (
    <View style={{ ...styles.tagContainer, backgroundColor }}>
      <Text style={{ ...styles.tag }}>{ text }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 10
  },
  tag: {
    color: 'white',
    fontSize: 12,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  }
});