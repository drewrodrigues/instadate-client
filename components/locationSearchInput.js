import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import axios from '../config/axios';
import FormTextInput from './formTextInput';

export default function LocationSearchInput({callback, placeholder, value}) {
  const [validLocations, setValidLocations] = useState([]);
  const [hasSelectedLocation, setHasSelectedLocation] = useState(false);

  React.useEffect(() => {
    if (validLocations.includes(value)) {
      setHasSelectedLocation(true);
      setValidLocations([]);
    } else if (value && !hasSelectedLocation) {
      queryForValidLocations();
    } else {
      setValidLocations([]);
    }
  }, [value]);

  async function queryForValidLocations() {
    if (validLocations.includes(value)) return;

    const response = await axios({
      method: 'get',
      url: `/locations?search_query=${value}`,
    });

    setValidLocations(response.data);
  }

  function selectLocation(location) {
    setHasSelectedLocation(true);
    setValidLocations([]);
    callback(location);
  }

  function typing(value) {
    callback(value);
    setHasSelectedLocation(false);
  }

  return (
    <View style={{position: 'relative'}}>
      <FormTextInput updateCallback={typing} value={value} placeholder={placeholder} />
      { hasSelectedLocation && (<Text style={styles.validLocation}>Valid Location</Text>) }
      { !hasSelectedLocation && (<Text style={styles.invalidLocation}>Invalid Location</Text>) }

      {validLocations.length > 0 && (
        <View style={styles.suggestionContainer}>
          {validLocations.map((location) => (
            <TouchableOpacity key={location} onPress={() => selectLocation(location)} style={styles.suggestion}>
              <Text style={styles.suggestionText}>{location}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionContainer: {
    backgroundColor: 'red',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
    marginTop: -22,
  },
  suggestion: {
    borderTopWidth: 1,
    borderTopColor: 'orangered',
    padding: 20,
  },
  suggestionText: {
    color: 'white',
    fontSize: 12,
  },
  invalidLocation: {
    color: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 12,
  },
  validLocation: {
    color: 'limegreen',
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 12,
  },
});
