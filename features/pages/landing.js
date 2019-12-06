import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LandingBackground from '../../assets/landing.png';
import BackgroundImage from '../../components/backgroundImage';

export default function Landing(props) {
  const {navigate} = props.navigation;

  return (
    <View style={styles.container}>
      <BackgroundImage image={LandingBackground} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigate('SignUp')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginBottom: 25,
    padding: 40,
  },
  signUpButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  loginText: {
    color: '#777',
    textAlign: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});
