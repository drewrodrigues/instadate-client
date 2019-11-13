import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import Logo from '../../assets/logo.png';
import FormTextInput from "../../components/formTextInput";
import BlankBackground from "../../assets/blankBackground.png";
import BackgroundImage from "../../components/backgroundImage";
import FormButton from "../../components/formButton";
import { signUp } from "./_actions";
import BackButton from "../../components/backButton";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { uploadImage } from "../imageUpload/_actions";

function SignUp(props) {
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
  const [picture, setPicture] = useState({}); // to store the file for placeholder
  const [uploadedImage, setUploadedImage] = useState(null); // for posting

  function handleSubmit() {
    props.signUp({
      email,
      password,
      sex,
      interested_in: interestedIn,
      location,
      age,
      outcome: lookingFor,
      bio,
      name,
      picture_id: uploadedImage.id
    }).catch(errorMessages => setErrors(errorMessages));
  }

  async function launchImageLibrary() {
    const permission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const response = await ImagePicker.launchImageLibraryAsync({ base64: true });
    const fileName = response.uri.replace(/.*ImagePicker\//, '');
    const uploadedImage = await uploadImage({ file: response.base64, file_name: fileName });
    setUploadedImage(uploadedImage.data);
    setPicture(response);
  }

  return (
    <View style={styles.container}>
      <BackButton {...props} />
      <BackgroundImage image={BlankBackground} />

      <Image source={Logo} style={styles.logo} />

      {/* Errors */}
      {errors.length !== 0 && (
        <View style={styles.errorContainer}>
          {errors.map((error, i) => (
            <Text key={i} style={styles.error}>{error}</Text>
          ))}
        </View>
      )}

      <ScrollView styles={styles.scrollView}>
        <View style={styles.formContainer}>

          {/* Profile Picture */}
          <View style={styles.profilePictureContainer}>
            <Image source={{ uri: picture.uri }} style={styles.profilePicture} />
            { uploadedImage && (
              <View style={styles.pendingVerification}>
                <Text style={styles.pendingVerificationText}>Pending Verification</Text>
              </View>
            )}
            <TouchableOpacity onPress={launchImageLibrary}>
              <Text style={styles.profilePictureText}>Select a photo...</Text>
            </TouchableOpacity>
          </View>

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
    backgroundColor: '#111',
    flex: 1,
  },
  formContainer: {
    padding: 40,
  },
  scrollView: {
    flex: 1,
  },
  iAmLabel: {
    color: 'white',
    marginBottom: 10
  },
  profilePictureContainer: {
    alignItems: 'center'
  },
  pendingVerification: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    top: 0,
    textAlign: 'center'
  },
  pendingVerificationText: {
    color: 'white',
    fontSize: 12
  },
  profilePicture: {
    alignSelf: 'center',
    backgroundColor: '#ccc',
    borderColor: 'white',
    borderWidth: 10,
    resizeMode: 'cover',
    height: 300,
    width: 300,
    borderRadius: 150,
  },
  profilePictureText: {
    color: 'white',
    padding: 20,
    textAlign: 'center'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
    height: 100,
    width: 200,
    resizeMode: 'contain',
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

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(null, mapDispatchToProps)(SignUp);
