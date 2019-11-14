import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PictureVerificationTag from "../../components/pictureVerificationTag";

function Profile(props) {
  return (
    <View>
      <View style={styles.headerImageContainer}>
        <Image source={{ uri: props.user.picture.url }} style={styles.picture} />
        <View style={styles.pictureVerificationContainer}>
          <PictureVerificationTag verified={props.user.picture.verified} />
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.userName}>{ props.user.name }</Text>
          <Text style={styles.userAge}>{ props.user.age }</Text>
        </View>

        <View>
          <Text style={styles.subDetail}>From { props.user.location }</Text>
          <Text style={styles.subDetail}>Interested in { props.user.interested_in }</Text>
          <Text style={styles.subDetail}>Looking for { props.user.outcomes.join(' or ') }</Text>
        </View>

        <Text style={styles.userBio}>{ props.user.bio }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerImageContainer: {
    position: 'relative'
  },
  picture: {
    height: 350,
    resizeMode: 'cover',
    width: '100%'
  },
  pictureVerificationContainer: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: -10,
    right: 40
  },
  detailContainer: {
    padding: 40
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 32,
    fontWeight: '700'
  },
  userAge: {
    color: '#e4555f',
    fontSize: 32,
    fontWeight: '400',
  },
  subDetail: {
    color: '#777',
    fontSize: 12,
    marginTop: 6
  },
  userBio: {
    lineHeight: 24,
    marginTop: 20
  }
});

const mapStateToProps = state => ({
  user: state.session
});

export default connect(mapStateToProps)(Profile);