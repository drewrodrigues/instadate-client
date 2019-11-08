import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LandingBackground from '../../assets/landing.png';

export default function Landing(props) {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Image source={LandingBackground} style={styles.background} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigate('SignUp')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    marginBottom: 25,
    padding: 40
  },
  signUpButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 20,
    padding: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center'
  },
  background: {
    left: 0,
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  }
});