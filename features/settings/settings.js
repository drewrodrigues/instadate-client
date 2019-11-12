import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import { clearSession, logout } from "./_actions";

function Settings(props) {
  console.log(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.logout}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200
  }
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(clearSession)
});

export default connect(null, mapDispatchToProps)(Settings);