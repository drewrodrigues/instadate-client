import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { logout } from "./_actions";
import SignedInContainer from "../../components/signedInContainer";

function Settings(props) {
  return (
    <SignedInContainer body={() => (
      <TouchableOpacity onPress={props.logout}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    )}/>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200
  }
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Settings);