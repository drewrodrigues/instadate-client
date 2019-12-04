import React from 'react';
import {Image, StyleSheet} from 'react-native';

/*
Nest within a <View> that has the following properties set:
container: {
  backgroundColor: <some color here>,
  height: '100%',
  width: '100%'
}
 */

export default function BackgroundImage({image}) {
  return (
    <Image source={image} style={styles.background} />
  );
}

const styles = StyleSheet.create({
  background: {
    left: 0,
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
});
