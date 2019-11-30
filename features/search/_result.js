import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import ActivityIcon from '../../components/activityIcon';

function Date(props) {
  return (
    <View style={styles.container}>
      { props.user.picture && <Image source={props.user.picture} style={styles.image}/> }
      <View style={styles.activityIconContainer}>
        <ActivityIcon activity={props.activity} />
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.userName}>{ props.user.name }</Text>

        <View style={styles.textContainer}>
          <FontAwesome5 name='map-marker-alt' size={12} style={styles.locationIcon} />
          <Text style={styles.locationText}>{ props.city }</Text>
        </View>

        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>
            <FontAwesome5 name='heart' size={24} style={styles.icon} />
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
  activityIconContainer: {
    position: 'absolute',
    left: 0,
    bottom: -15,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 120,
    padding: 10
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  locationIcon: {
    color: '#ccc',
    marginRight: 5
  },
  locationText: {
    color: '#ccc',
    fontSize: 12
  },
  detailContainer: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    paddingLeft: 55,
    marginLeft: 60,
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
    top: 27,
    right: 15
  },
  requestButtonText: {
    color: '#e9ebee'
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  }
});

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id == ownProps.creator_id)
});

export default connect(mapStateToProps)(Date);