import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormTextInput from "../../components/formTextInput";
import FormButton from "../../components/formButton";
import { createDate } from "./_action";
import { FontAwesome5 } from '@expo/vector-icons';

function DateForm(props) {
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');

  function handleSubmit() {
    props.createDate({
      activity,
      time
    })
  }

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.activities}>
          <TouchableOpacity onPress={() => setActivity('anything')} style={{ ...styles.activityButton, backgroundColor: activity === 'anything' ? 'red' : '#222' }}>
            <FontAwesome5 name='question' size={32} style={{ ...styles.icon, color: activity === 'anything' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'anything' ? 'white' : 'black' }}>Anything</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('coffee')} style={{ ...styles.activityButton, backgroundColor: activity === 'coffee' ? 'red' : '#222' }}>
            <FontAwesome5 name='coffee' size={32} style={{ ...styles.icon, color: activity === 'coffee' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'coffee' ? 'white' : 'black' }}>Coffee</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('drinks')} style={{ ...styles.activityButton, backgroundColor: activity === 'drinks' ? 'red' : '#222' }}>
            <FontAwesome5 name='cocktail' size={32} style={{ ...styles.icon, color: activity === 'drinks' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'drinks' ? 'white' : 'black' }}>Drinks</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('food')} style={{ ...styles.activityButton, backgroundColor: activity === 'food' ? 'red' : '#222' }}>
            <FontAwesome5 name='utensils' size={32} style={{ ...styles.icon, color: activity === 'food' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'food' ? 'white' : 'black' }}>Food</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('hike')} style={{ ...styles.activityButton, backgroundColor: activity === 'hike' ? 'red' : '#222' }}>
            <FontAwesome5 name='hiking' size={32} style={{ ...styles.icon, color: activity === 'hike' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'hike' ? 'white' : 'black' }}>Hike</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('movie')} style={{ ...styles.activityButton, backgroundColor: activity === 'movie' ? 'red' : '#222' }}>
            <FontAwesome5 name='film' size={32} style={{ ...styles.icon, color: activity === 'movie' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'movie' ? 'white' : 'black' }}>Movie</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('roller skating')} style={{ ...styles.activityButton, backgroundColor: activity === 'roller skating' ? 'red' : '#222' }}>
            <FontAwesome5 name='skating' size={32} style={{ ...styles.icon, color: activity === 'roller skating' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'roller skating' ? 'white' : 'black' }}>Skating</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('tea')} style={{ ...styles.activityButton, backgroundColor: activity === 'tea' ? 'red' : '#222' }}>
            <FontAwesome5 name='mug-hot' size={32} style={{ ...styles.icon, color: activity === 'tea' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'tea' ? 'white' : 'black' }}>Tea</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivity('walk')} style={{ ...styles.activityButton, backgroundColor: activity === 'walk' ? 'red' : '#222' }}>
            <FontAwesome5 name='walking' size={32} style={{ ...styles.icon, color: activity === 'walk' ? 'white' : 'black' }} />
            <Text style={{ ...styles.activityButtonText, color: activity === 'walk' ? 'white' : 'black' }}>Walk</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.label}>3. Select a time... (optional)</Text>
        <FormTextInput showLabel={false} placeholder='Time' value={time} updateCallback={setTime}/>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => props.close()} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
          <FormButton text='Add Date' handleSubmit={handleSubmit} customStyles={{ width: '50%' }}/>
        </View>
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
  },
  closeButton: {
    backgroundColor: '#222',
    width: '50%',
    borderRadius: 10,
    marginTop: 20,
    padding: 20
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center'
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
    height: '33.3333%',
    width: '33.3333%'
  },
  activityButtonText: {
    color: '#777'
  },
  activityButtonSelected: {
    borderColor: 'darkred',
    borderWidth: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3333%'
  },
  icon: {
    marginBottom: 10
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const mapDispatchToProps = dispatch => ({
  createDate: date => dispatch(createDate(date))
});

export default connect(null, mapDispatchToProps)(DateForm);