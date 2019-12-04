import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {logout} from './_actions';
import {FontAwesome} from '@expo/vector-icons';

function Settings(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.logout} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
        <FontAwesome name='sign-out' size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  icon: {
    color: '#ccc',
  },
  buttonText: {
    color: 'black',
  },
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Settings);
