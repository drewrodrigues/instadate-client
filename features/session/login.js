import React, { useState }  from 'react';
import FormTextInput from '../../components/formTextInput';
import { connect } from 'react-redux';
import { Alert, Image, StyleSheet, View } from 'react-native';
import BlankBackground from '../../assets/blankBackground.png';
import BackgroundImage from "../../components/backgroundImage";
import Logo from '../../assets/logo.png';
import FormButton from "../../components/formButton";
import { login } from './_actions';

function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    login({ email, password })
    .catch(_ => Alert.alert('Failed to login'));
  }

  return (
    <View style={styles.container}>
      <BackgroundImage image={BlankBackground} />

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

        <FormButton
          color='red'
          fontWeight='700'
          handleSubmit={handleLogin}
          text='Login'
        />
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

const mapDispatchToProps = dispatch => ({
  login: session => dispatch(login(session))
});

export default connect(null, mapDispatchToProps)(Login);