import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 40
  },
  text: {
    fontSize: 32,
    textAlign: 'center'
  }
});


const mapStateToProps = state => ({
  email: state.session.email,
  picture: state.session.picture
});

export default connect(mapStateToProps)(Search);