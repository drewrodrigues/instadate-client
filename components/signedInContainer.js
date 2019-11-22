import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Logo from "../assets/logo.png";

export default function SignedInContainer(props) {
  console.log(props.body);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        {props.button}
      </View>

      <View style={styles.body}>
        {props.loading && <Text style={styles.loadingText}>Loading...</Text>}
        {!props.loading && props.body()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    padding: 20
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    width: 200,
    marginLeft: -20
  },
  loadingText: {
    color: 'white',
    fontSize: 32
  }
});