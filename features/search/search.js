import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

function Search(props) {


  return (
    <View>
      <Text>{ props.email }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
});

const mapStateToProps = state => ({
  email: state.session.email
});

export default connect(mapStateToProps)(Search);