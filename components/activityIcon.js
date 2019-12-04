import React from 'react';
import {StyleSheet} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';


export default function({activity}) {
  const activityToIconName = {
    'anything': 'question',
    'coffee': 'coffee',
    'drinks': 'cocktail',
    'food': 'utensils',
    'hike': 'hiking',
    'movie': 'film',
    'other': 'question',
    'skating': 'skating',
    'tea': 'mug-hot',
    'walk': 'walking',
  };

  return (
    <FontAwesome5
      name={activityToIconName[activity]}
      size={16}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'red',
  },
});
