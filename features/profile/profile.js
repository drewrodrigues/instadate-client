import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

function Profile(props) {
  console.log(props);

  return (
    <View>
      <Image source={{ uri: props.user.picture }} style={styles.picture} />

      <View style={styles.detailContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.userName}>{ props.user.name }</Text>
          <Text style={styles.userAge}>{ props.user.age }</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  picture: {
    height: 350,
    resizeMode: 'cover',
    width: '100%'
  },
  detailContainer: {
    padding: 40
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 32,
    fontWeight: '700'
  },
  userAge: {
    fontSize: 16,
    fontWeight: '400',
  }
});

const mapStateToProps = state => ({
  user: state.session
});

export default connect(mapStateToProps)(Profile);