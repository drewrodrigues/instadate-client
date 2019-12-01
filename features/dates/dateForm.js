import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormTextInput from "../../components/formTextInput";
import FormButton from "../../components/formButton";
import { createDate } from "./_action";
import { FontAwesome5 } from '@expo/vector-icons';
import RadioButton from "../../components/radioButton";
import ToggleableStyle from "../../components/toggleableStyle";

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
          {[
            { name: 'anything', icon: 'question' },
            { name: 'coffee', icon: 'coffee' },
            { name: 'drinks', icon: 'cocktail' },
            { name: 'food', icon: 'utensils' },
            { name: 'hike', icon: 'hiking' },
            { name: 'movie', icon: 'film' },
            { name: 'skating', icon: 'skating' },
            { name: 'tea', icon: 'mug-hot' },
            { name: 'walk', icon: 'walking' }
          ].map(activityOption => (
            <RadioButton
              activeStyle={styles.activityButtonSelected}
              inactiveStyle={styles.activityButton}
              key={activityOption.name}
              selectedValue={activity}
              value={activityOption.name}
              updateCallback={setActivity}
           >
              <ToggleableStyle
                activeStyle={{ color: 'white' }}
                inactiveStyle={{ color: 'black' }}
                selectedValue={activityOption.name}
                value={activity}
              >
                <FontAwesome5 name={activityOption.icon} size={32} style={{ color: 'white' }}/>
                <Text style={{ color: 'white' }}>{activityOption.name}</Text>
              </ToggleableStyle>
            </RadioButton>
          ))}
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
    height: '33.3333%',
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