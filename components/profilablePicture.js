import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileModal from "./profileModal";

function ProfilablePicture({
  picture,
  userId
}) {
  const [showProfile, setShowProfile] = useState(false);
  if (!picture) return null;

  return (
    <TouchableOpacity onPress={() => setShowProfile(true)}>
      <Image source={picture} style={styles.picture}/>

      {showProfile && (
        <ProfileModal userId={userId} close={() => setShowProfile(false)}/>
      )}
    </TouchableOpacity>
  )
}

const mapStateToProps = (state, ownProps) => ({
  picture: state.users.find(user => user.id === ownProps.userId).picture
});

export default connect(mapStateToProps)(ProfilablePicture);

const styles = StyleSheet.create({
  picture: {
    borderRadius: 50,
    height: 100,
    marginRight: 20,
    width: 100,
  }
});