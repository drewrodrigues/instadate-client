import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";
import ProfilablePicture from "../../components/profilablePicture";
import {denySpark, acceptSpark} from "./_actions";

function Spark(props) {
  if (!props.user) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfilablePicture userId={props.user.id} />
        <View style={styles.headerDetail}>
          <View style={styles.nameAndAgeContainer}>
            <Text style={styles.name}>{props.user.name}</Text>
            <Text style={styles.age}>{props.user.age}</Text>
          </View>
          <Text style={styles.location}>{props.user.location}</Text>
          <Text style={styles.noteText}>{props.note}</Text>
        </View>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.blockButton}>
          <FontAwesome5 name='ban' size={12} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Block</Text>
        </TouchableOpacity>

        <View style={styles.rightButtonsContainer}>
          <TouchableOpacity style={styles.denyButton} onPress={props.denySpark}>
            <FontAwesome5 name='times' size={12} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Deny</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.acceptButton} onPress={props.acceptSpark}>
            <FontAwesome5 name='check' size={12} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  headerDetail: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'space-between',
  },
  userImage: {
    borderRadius: 50,
    height: 100,
    marginRight: 20,
    width: 100,
    zIndex: 200,
  },
  nameAndAgeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
  },
  age: {
  },
  location: {
    color: '#ccc',
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rightButtonsContainer: {
    flexDirection: 'row',
  },
  blockButton: {
    alignItems: 'center',
    backgroundColor: '#eeee',
    flexDirection: 'row',
    padding: 5,
    paddingRight: 10,
    borderRadius: 5,
  },
  denyButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  acceptButton: {
    alignItems: 'center',
    backgroundColor: 'green',
    flexDirection: 'row',
    marginLeft: 5,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonIcon: {
    color: 'white',
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
  },
});

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.user_id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  denySpark: () => dispatch(denySpark(ownProps.id)),
  acceptSpark: (id) => dispatch(acceptSpark(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Spark);