import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import ActivityIcon from '../../components/activityIcon';
import {sendSpark} from './_action';

function Date(props) {
  const [note, setNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function sendSpark() {
    setShowModal(false);
    props.sendSpark({ instadate_id: props.id, note });
  }

  return (
    <View style={styles.container}>
      { props.user.picture && <Image source={props.user.picture} style={styles.image}/> }

      <View style={styles.activityIconContainer}>
        <ActivityIcon activity={props.activity} />
      </View>

      { !showModal && (<View style={styles.detailContainer}>
        <View style={styles.leftDetailContainer}>
          <Text style={styles.userName}>{ props.user.name }</Text>

          <View style={styles.textContainer}>
            <FontAwesome5 name='map-marker-alt' size={12} style={styles.locationIcon} />
            <Text style={styles.locationText}>{ props.city }</Text>
          </View>
        </View>

        <View style={styles.rightDetailContainer}>
          <TouchableOpacity style={styles.requestButton} onPress={() => setShowModal(true)}>
            <Text style={styles.requestButtonText}>
              <FontAwesome5 name='bolt' size={24} style={styles.icon} />
            </Text>
          </TouchableOpacity>

          <Text style={styles.distance}>{props.distance} miles away</Text>
        </View>
      </View>)}

      { showModal && (<View style={styles.detailContainer}>
        <View style={styles.confirmationContainer}>
          <TextInput placeholder='Send a note... (optional)' onChangeText={val => setNote(val)}/>

          <View style={styles.confirmationButtonsContainer}>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={{ ...styles.confirmationButton, ...styles.cancelButton }}
            >
              <Text style={styles.confirmationButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={sendSpark}
              style={{ ...styles.confirmationButton, ...styles.sendButton }}
            >
              <FontAwesome5 name='bolt' size={10} style={{ ...styles.confirmationButtonText, ...styles.confirmationButtonIcon }} />
              <Text style={styles.confirmationButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  confirmationContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  confirmationButtonsContainer: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  confirmationButton: {
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  confirmationButtonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  confirmationButtonIcon: {
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  sendButton: {
    backgroundColor: 'red',
    marginLeft: 5,
  },
  container: {
    height: 100,
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
    borderRadius: 50,
    height: 100,
    position: 'absolute',
    width: 100,
    zIndex: 100,
  },
  activityIconContainer: {
    position: 'absolute',
    left: 0,
    bottom: -15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    zIndex: 120,
    padding: 10,
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationIcon: {
    color: '#ccc',
    marginRight: 5,
  },
  locationText: {
    color: '#ccc',
    fontSize: 12,
  },
  detailContainer: {
    borderColor: '#eee',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    paddingLeft: 55,
    marginLeft: 60,
    flex: 1,
    flexDirection: 'row',
  },
  leftDetailContainer: {
    flex: 2,
  },
  rightDetailContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
  },
  distance: {
    color: '#ccc',
    fontSize: 12,
  },
  requestButton: {
  },
  requestButtonText: {
    color: '#e9ebee',
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
});

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id == ownProps.creator_id),
});

const mapDispatchToProps = (dispatch) => ({
  sendSpark: (spark) => dispatch(sendSpark(spark))
});

export default connect(mapStateToProps, mapDispatchToProps)(Date);
