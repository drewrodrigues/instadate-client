import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileModal from "./profileModal";

export default function ProfilablePicture({
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

const styles = StyleSheet.create({
  picture: {
    borderRadius: 50,
    height: 100,
    marginRight: 20,
    width: 100,
  }
});