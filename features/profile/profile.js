import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import PictureVerificationTag from '../../components/pictureVerificationTag';
import GuyPlaceholder from '../../assets/guy-placeholder.jpg';
import GirlPlaceholder from '../../assets/girl-placeholder.jpg';

function Profile(props) {
  return (
    <View>
      <View style={styles.headerImageContainer}>
        {props.user.picture && (
          <View>
            <Image source={{uri: props.user.picture.url}} style={styles.picture} />
            <View style={styles.pictureVerificationContainer}>
              <PictureVerificationTag verified={props.user.picture.verified} />
            </View>
          </View>
        )}

        {!props.user.picture && (
          <Image
            source={props.user.sex === 'man' ? GuyPlaceholder : GirlPlaceholder}
            style={styles.picturePlaceholder}
          />
        )}
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.userName}>{ props.user.name }</Text>
          <Text style={styles.userAge}>{ props.user.age }</Text>
        </View>

        <View>
          <Text style={styles.subDetail}>From { props.user.location }</Text>
          <Text style={styles.subDetail}>Interested in { props.user.interested_in.join(' and ') }</Text>
          <Text style={styles.subDetail}>Looking for { props.user.outcomes.join(' or ') }</Text>
        </View>

        <Text style={styles.userBio}>{ props.user.bio }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImageContainer: {
    position: 'relative',
  },
  picture: {
    height: 600,
    resizeMode: 'cover',
    width: '100%',
  },
  picturePlaceholder: {
    backgroundColor: '#ccc',
    height: 600,
    width: '100%',
  },
  pictureVerificationContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  detailContainer: {
    backgroundColor: 'white',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    height: 320,
    marginTop: -120,
    marginLeft: 20,
    marginRight: 20,
    padding: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 32,
    fontWeight: '700',
  },
  userAge: {
    color: '#e4555f',
    fontSize: 24,
    fontWeight: '700',
  },
  subDetail: {
    color: '#777',
    fontSize: 12,
    marginTop: 6,
  },
  userBio: {
    lineHeight: 24,
    marginTop: 20,
  },
});

const mapStateToProps = (state, ownProps) => ({
  user: (ownProps.userId ? state.users.find(user => user.id === ownProps.userId) : state.session),
});

export default connect(mapStateToProps)(Profile);
