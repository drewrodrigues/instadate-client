import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import * as Utils from './utils';
import Logo from '../../../assets/logo.png';
import FormTextInput from "../../../components/formTextInput";
import BlankBackground from "../../../assets/blankBackground.png";
import BackgroundImage from "../../../components/backgroundImage";
import FormButton from "../../../components/formButton";

export default function Registration() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState(null);
  const [interestedIn, setInterestedIn] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const sexOptions = [
    {
      name: 'man',
      backgroundColor: '#3498db'
    },
    {
      name: 'woman',
      backgroundColor: '#e74c3c'
    }
  ];

  const interestedInOptions = [
    {
      name: 'men',
      backgroundColor: '#3498db'
    },
    {
      name: 'women',
      backgroundColor: '#e74c3c'
    }
  ];

  const lookingForOptions = [
    {
      name: 'dating',
      backgroundColor: '#2ecc71'
    },
    {
      name: 'hookups',
      backgroundColor: '#e74c3c'
    },
    {
      name: 'relationship',
      backgroundColor: '#8e44ad'
    }
  ];

  function handleSubmit(e) {
    Utils.signUp({
      email,
      password,
      sex,
      interested_in: interestedIn,
      location,
      age,
      outcome: lookingFor,
      bio
    }).catch(err => {
      setErrors(err.response.data);
    });
  }

  return (
    <View style={styles.container}>
      <BackgroundImage image={BlankBackground} />

      {/* Errors */}
      <View style={styles.errorContainer}>
        {errors.map((error, i) => (
          <Text key={i} style={styles.error}>{error}</Text>
        ))}
      </View>

      <ScrollView styles={styles.scrollView}>
        <View style={styles.formContainer}>
          <Image source={Logo} style={styles.title} />


          {/* Email */}
          <FormTextInput
            placeholder='Email'
            updateCallback={setEmail}
            value={email}
          />

          {/* Password */}
          <FormTextInput
            placeholder='Password'
            updateCallback={setPassword}
            value={password}
          />

          {/* Name */}
          <FormTextInput
            placeholder='Name'
            updateCallback={setName}
            value={name}
          />

          {/* Age */}
          <FormTextInput
            placeholder='Age'
            updateCallback={setAge}
            value={age}
          />

          {/* Location */}
          <FormTextInput
            placeholder='Location'
            updateCallback={setLocation}
            value={location}
          />

          {/* Bio */}
          <FormTextInput
            placeholder='Bio'
            updateCallback={setBio}
            value={bio}
          />

          {/* I am a.... (sex selection) */}
          <Text style={styles.iAmLabel}>I am a...</Text>
          <View style={styles.radioSelections}>
            <TouchableOpacity
              style={sex === 'man' ? { ...styles.checkedRadio, backgroundColor: 'blue' } : styles.radio}
              onPress={() => setSex('man')}
            >
              <Text style={styles.radioText}>Man</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={sex === 'woman' ? { ...styles.checkedRadio, backgroundColor: 'pink' } : styles.radio}
              onPress={() => setSex('woman')}
            >
              <Text style={styles.radioText}>Woman</Text>
            </TouchableOpacity>
          </View>

          {/* Interested in.... */}
          <Text style={styles.iAmLabel}>Interested in...</Text>
          <View style={styles.radioSelections}>
            <TouchableOpacity
              style={interestedIn === 'men' ? { ...styles.checkedRadio, backgroundColor: 'blue' } : styles.radio}
              onPress={() => setInterestedIn('men')}
            >
              <Text style={styles.radioText}>Men</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={interestedIn === 'women' ? { ...styles.checkedRadio, backgroundColor: 'pink' } : styles.radio}
              onPress={() => setInterestedIn('women')}
            >
              <Text style={styles.radioText}>Women</Text>
            </TouchableOpacity>
          </View>

          {/* Looking for.... */}
          <Text style={styles.iAmLabel}>Looking for...</Text>
          <View style={styles.radioSelections}>
            <TouchableOpacity
              style={lookingFor === 'dating' ? { ...styles.checkedRadio, backgroundColor: 'red' } : styles.radio}
              onPress={() => setLookingFor('dating')}
            >
              <Text style={styles.radioText}>Dating</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={lookingFor === 'hookups' ? { ...styles.checkedRadio, backgroundColor: 'orange' } : styles.radio}
              onPress={() => setLookingFor('hookups')}
            >
              <Text style={styles.radioText}>Hookups</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={lookingFor === 'relationship' ? { ...styles.checkedRadio, backgroundColor: 'purple' } : styles.radio}
              onPress={() => setLookingFor('relationship')}
            >
              <Text style={styles.radioText}>Relationship</Text>
            </TouchableOpacity>
          </View>

          {/* Submit */}
          <FormButton fontWeight='700' handleSubmit={handleSubmit} text='Sign Up' />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#111',
    flex: 1,
    paddingTop: 0
  },
  formContainer: {
    padding: 40
  },
  scrollView: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1
  },
  iAmLabel: {
    color: 'white',
    marginBottom: 10
  },
  title: {
    resizeMode: 'contain',
    width: '100%'
  },
  errorContainer: {
    padding: 40
  },
  error: {
    backgroundColor: 'red',
    borderRadius: 10,
    color: 'white',
    padding: 5,
    marginBottom: 10
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: 'darkred',
    borderColor: 'red',
    borderWidth: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
    padding: 20
  },
  radioSelections: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  radio: {
    borderColor: '#333',
    borderWidth: 1, // using as margin
    flex: 1,
    padding: 20,
  },
  radioText: {
    color: 'white',
    textAlign: 'center'
  },
  checkedRadio: {
    borderColor: '#222',
    borderWidth: 1, // using as margin
    flex: 1,
    padding: 20,
  },
  submit: {
    backgroundColor: 'red',
    padding: 20,
  },
  submitText: {
    color: 'white',
    textAlign: 'center'
  },
  label: {
    color: 'white',
    marginBottom: 10
  }
});