import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default function SignedInContainer(props) {
  const query = props.queryOnFocus || function() {};

  return (
    <View style={{ ...styles.container, ...props.customStyles }}>
      <NavigationEvents onWillFocus={query} />

      <View style={styles.header}>
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
    flex: 1,
    height: '100%',
    padding: 20,
    paddingTop: 50
  },
  body: {
    flex: 1
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