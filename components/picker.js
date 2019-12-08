import React from 'react';
import {Alert, Picker, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function PickerWithButton({close, updateCallback, value}) {
  function checkForPremiumAndUpdate(value) {
    // if (value > 15) {
    //   Alert.alert('Premium Required', 'Please subscribe to search above 10 miles');
    // } else {
    // }
    updateCallback(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.selectDistance}>Select Distance</Text>
        <TouchableOpacity onPress={close} style={styles.close}><Text>Close</Text></TouchableOpacity>
      </View>

      <Picker
        onValueChange={(itemValue) => checkForPremiumAndUpdate(itemValue)}
        selectedValue={value}
        style={styles.picker}
      >
        <Picker.Item label="1 miles" value={1} />
        <Picker.Item label="5 miles" value={5} />
        <Picker.Item label="10 miles" value={10} />
        {/* premium */}
        <Picker.Item label="25 miles" value={25} />
        <Picker.Item label="50 miles" value={50} />
        <Picker.Item label="100 miles" value={100} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: -20,
    marginBottom: 0,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  close: {
    padding: 10,
    marginRight: -10,
    justifyContent: 'flex-start',
  },
  selectDistance: {
    fontWeight: '700',
  },
  picker: {
    marginBottom: -20,
  },
});
