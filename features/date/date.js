import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Date(props) {
  return (
    <View style={styles.container}>
      { props.user.picture && <Image source={props.user.picture} style={styles.image}/> }
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>{ props.activity } in { props.location }</Text>
        <Text>with { props.user.name }</Text>

        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>Request</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 35,
  },
  image: {
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    height: 100,
    width: 100,
    position: 'absolute',
    top: -10,
    zIndex: 100
  },
  detailContainer: {
    padding: 20,
    borderRadius: 20,
    marginLeft: 60,
    paddingLeft: 50,
    flex: 1,
    backgroundColor: 'white'
  },
  detailText: {

  },
  requestButton: {
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    top: -10,
    right: 10
  },
  requestButtonText: {
    color: 'white',
    fontSize: 12
  }
});

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id == ownProps.creator_id)
});

export default connect(mapStateToProps)(Date);