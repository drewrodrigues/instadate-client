import React, { useState }  from 'react';
import FormTextInput from '../../../components/formTextInput';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BlankBackground from '../../../assets/blankBackground.png';
import BackgroundImage from "../../../components/backgroundImage";
import Logo from '../../../assets/logo.png';
import FormButton from "../../../components/formButton";

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {

  }

  return (
    <View style={styles.container}>
      <BackgroundImage image={BlankBackground} />

      <Text>Login</Text>

      <View style={styles.formContainer}>
        <Image source={Logo} style={styles.logo} />

        <FormTextInput
          placeholder='Email'
          updateCallback={setEmail}
          value={email}
        />
        <FormTextInput
          placeholder='Password'
          updateCallback={setPassword}
          value={password}
        />

        <FormButton color='red' fontWeight='700' handleSubmit={() => {}} text='Login' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    height: '100%',
    width: '100%'
  },
  logo: {
    resizeMode: 'contain',
    width: '100%'
  },
  formContainer: {
    padding: 40
  }
});