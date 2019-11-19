import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormTextInput from "../../components/formTextInput";
import FormButton from "../../components/formButton";
import { createDate } from "./_action";

function DateForm(props) {
  const [activity, setActivity] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');

  function handleSubmit() {
    props.createDate({
      activity,
      location,
      time
    })
  }

  return (
    <Modal>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.close()}>
          <Text style={styles.closeButtonText}>X Close</Text>
        </TouchableOpacity>

        <Text style={styles.label}>1. Choose an activity...</Text>
        <View style={styles.activities}>
          <TouchableOpacity onPress={() => setActivity('anything')} style={{ ...styles.activityButton, backgroundColor: activity == 'anything' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Anything</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('coffee')} style={{ ...styles.activityButton, backgroundColor: activity == 'coffee' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Coffee</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('drinks')} style={{ ...styles.activityButton, backgroundColor: activity == 'drinks' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Drinks</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('food')} style={{ ...styles.activityButton, backgroundColor: activity == 'food' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Food</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('hike')} style={{ ...styles.activityButton, backgroundColor: activity == 'hike' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Hike</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('ice skating')} style={{ ...styles.activityButton, backgroundColor: activity == 'ice skating' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Ice Skating</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('movie')} style={{ ...styles.activityButton, backgroundColor: activity == 'movie' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Movie</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('roller skating')} style={{ ...styles.activityButton, backgroundColor: activity == 'roller skating' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Roller Skating</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('tea')} style={{ ...styles.activityButton, backgroundColor: activity == 'tea' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Tea</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setActivity('walk')} style={{ ...styles.activityButton, backgroundColor: activity == 'walk' ? 'red' : '#222' }}><Text style={styles.activityButtonText}>Walk</Text></TouchableOpacity>
        </View>

        <Text style={styles.label}>2. Select a location...</Text>
        <FormTextInput showLabel={false} placeholder='Location' value={location} updateCallback={setLocation}/>

        <Text style={styles.label}>3. Select a time... (optional)</Text>
        <FormTextInput showLabel={false} placeholder='Time' value={time} updateCallback={setTime}/>

        <FormButton text='Add Date' handleSubmit={handleSubmit} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    height: '100%',
    width: '100%',
    padding: 40,
    paddingTop: 100
  },
  closeButtonText: {
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    marginTop: 20
  },
  activities: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  activityButton: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3333%'
  },
  activityButtonText: {
    color: 'white'
  },
  activityButtonSelected: {
    borderColor: 'darkred',
    borderWidth: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3333%'
  }
});

const mapDispatchToProps = dispatch => ({
  createDate: date => dispatch(createDate(date))
});

export default connect(null, mapDispatchToProps)(DateForm);