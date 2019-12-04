import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormTextInput from "../../components/formTextInput";
import FormButton from "../../components/formButton";
import { createOrUpdateDate } from "./_action";
import { FontAwesome5 } from '@expo/vector-icons';
import RadioButton from "../../components/radioButton";
import ToggleableStyle from "../../components/toggleableStyle";

function DateForm({
  close,
  createOrUpdateDate,
  date,
}) {
  const [activity, setActivity] = useState(date ? date.activity : '');
  const [time, setTime] = useState(date ? date.time : '');

  function handleSubmit() {
    const params = { activity, time };
    const action = date ? 'UPDATE' : 'CREATE';
    createOrUpdateDate(params, action)
      .then(close);
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
          <TouchableOpacity onPress={() => close()} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
          <FormButton text={date ? 'Update Date' : 'Add Date'} handleSubmit={handleSubmit} customStyles={{ width: '50%' }}/>
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

const mapStateToProps = state => ({
  date: state.dates.find(date => date.creator_id == state.session.id)
});

const mapDispatchToProps = dispatch => ({
  createOrUpdateDate: (date, action) => dispatch(createOrUpdateDate(date, action))
});

export default connect(mapStateToProps, mapDispatchToProps)(DateForm);