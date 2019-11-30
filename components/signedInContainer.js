import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from "../assets/logo.png";
import { NavigationEvents } from 'react-navigation';

export default function SignedInContainer(props) {
  const query = props.queryOnFocus || function() {};
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={query} />

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
    backgroundColor: '#e9ebee',
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