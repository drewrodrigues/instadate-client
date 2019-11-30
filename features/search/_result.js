import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

function Date(props) {
  return (
    <View style={styles.container}>
      { props.user.picture && <Image source={props.user.picture} style={styles.image}/> }

      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>{ props.activity } in { props.city }</Text>
        <Text>with { props.user.name }</Text>

        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>
            <FontAwesome5 name='heart' size={32} style={styles.icon} />
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
    borderRadius: 50,
    height: 100,
    position: 'absolute',
    width: 100,
    zIndex: 100
  },
  detailContainer: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    paddingLeft: 30,
    marginLeft: 80,
    flex: 1,
  },
  detailText: {
  },
  requestButton: {
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    top: 15,
    right: 15
  },
  requestButtonText: {
    color: '#e9ebee'
  }
});

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id == ownProps.creator_id)
});

export default connect(mapStateToProps)(Date);