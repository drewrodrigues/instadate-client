import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, View } from 'react-native';
import * as Utils from './utils';

export default function Registration() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sexId, setSexId] = useState(null);
  const [interestedIn, setInterestedIn] = useState([]);
  const [lookingFor, setLookingFor] = useState([]);
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const sexOptions = [
    {
      name: 'man',
      id: 1,
      backgroundColor: '#3498db'
    },
    {
      name: 'woman',
      id: 2,
      backgroundColor: '#e74c3c'
    }
  ];

  const interestedInOptions = [
    {
      name: 'men',
      id: 1,
      backgroundColor: '#3498db'
    },
    {
      name: 'women',
      id: 2,
      backgroundColor: '#e74c3c'
    }
  ];

  const lookingForOptions = [
    {
      name: 'dating',
      id: 1,
      backgroundColor: '#2ecc71'
    },
    {
      name: 'hookups',
      id: 2,
      backgroundColor: '#e74c3c'
    },
    {
      name: 'relationship',
      id: 3,
      backgroundColor: '#8e44ad'
    }
  ];

  function handleSubmit(e) {
    Utils.SignUp({
      email,
      password,
      sex_id: sexId,
      interested_sex_ids: interestedIn,
      location,
      age,
      looking_for_outcome_ids: lookingFor,
      bio
    }).catch(err => {
      setErrors(err.response.data);
    });
  }

  function toggleInterestedIn(id) {
    if (interestedIn.includes(id)) {
      setInterestedIn(selections => selections.filter(e => e !== id))
    } else {
      setInterestedIn(interestedIn.concat([id]))
    }
  }

  function toggleLookingFor(id) {
    if (lookingFor.includes(id)) {
      setLookingFor(selections => selections.filter(e => e !== id))
    } else {
      setLookingFor(lookingFor.concat([id]))
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView styles={styles.scrollView}>
        <Text style={styles.title}>Instadate</Text>

        {/* Errors */}
        {errors.map((error, i) => (
          <Text key={i} style={styles.error}>{error}</Text>
        ))}

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          autoCapitalize='none'
          autoCompleteType='email'
          onChangeText={email => setEmail(email)}
          placeholder='Email'
          style={styles.input}
          textContentType='emailAddress'
          value={email}
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          autoCapitalize='none'
          autoCompleteType='password'
          onChangeText={password => setPassword(password)}
          placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
          textContentType='newPassword'
          value={password}
        />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          onChangeText={name => setName(name)}
          placeholder='Name'
          style={styles.input}
          value={name}
        />

        {/* Age */}
        <Text style={styles.label}>Age</Text>
        <TextInput
          onChangeText={age => setAge(age)}
          placeholder='Age'
          style={styles.input}
          value={age}
        />

        {/* Location */}
        <Text style={styles.label}>Location</Text>
        <TextInput
          onChangeText={location => setLocation(location)}
          placeholder='Location'
          style={styles.input}
          value={location}
        />

        {/* Bio */}
        <Text style={styles.label}>Bio</Text>
        <TextInput
          onChangeText={bio => setBio(bio)}
          placeholder='Bio'
          style={styles.input}
          value={bio}
        />

        {/* I am a.... (sex selection) */}
        <Text style={styles.iAmLabel}>I am a...</Text>
        <View style={styles.radioSelections}>
          {sexOptions.map(sexOption => (
            <TouchableOpacity
              key={sexOption.id}
              style={sexId === sexOption.id ? { ...styles.checkedRadio, backgroundColor: sexOption.backgroundColor } : styles.radio}
              onPress={() => setSexId(sexOption.id)}
            >
              <Text style={styles.radioText}>{sexOption.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Interested in.... */}
        <Text style={styles.iAmLabel}>Interested in...</Text>
        <View style={styles.radioSelections}>
          {interestedInOptions.map(interestedInOption => (
            <TouchableOpacity
              key={interestedInOption.id}
              style={interestedIn.includes(interestedInOption.id) ? { ...styles.checkedRadio, backgroundColor: interestedInOption.backgroundColor } : styles.radio}
              onPress={() => toggleInterestedIn(interestedInOption.id)}
            >
              <Text style={styles.radioText}>{interestedInOption.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Looking for.... */}
        <Text style={styles.iAmLabel}>Looking for...</Text>
        <View style={styles.radioSelections}>
          {lookingForOptions.map(lookingForOption => (
            <TouchableOpacity
              key={lookingForOption.id}
              style={lookingFor.includes(lookingForOption.id) ? { ...styles.checkedRadio, backgroundColor: lookingForOption.backgroundColor } : styles.radio}
              onPress={() => toggleLookingFor(lookingForOption.id)}
            >
              <Text style={styles.radioText}>{lookingForOption.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit */}
        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.submitText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#222',
    flex: 1,
    padding: 20,
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
    color: 'white',
    fontSize: 72,
    marginBottom: 50,
    marginTop: 20,
    textAlign: 'center'
  },
  error: {
    backgroundColor: 'red',
    color: 'white',
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