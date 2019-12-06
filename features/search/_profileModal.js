import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Profile from '../profile/profile';
import {FontAwesome5} from "@expo/vector-icons";

export default class ProfileModal extends React.Component {
  render() {
    return (
      <Modal>
        <TouchableOpacity onPress={this.props.close} style={styles.closeButton}>
          <FontAwesome5 name='times' size={16} style={styles.closeButtonIcon} />
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>

        <Profile userId={this.props.userId} />
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  closeButton: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    top: 45,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    zIndex: 200,
    borderRadius: 10,
  },
  closeButtonIcon: {
    color: '#777',
    marginRight: 5,
  },
  closeButtonText: {
    color: '#777',
  },
});