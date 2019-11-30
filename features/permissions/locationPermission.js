import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { askForLocationPermission } from "./_actions";
import FormButton from "../../components/formButton";
import LocationIcon from '../../assets/locationIcon.png';
import NoLocationIcon from '../../assets/noLocationIcon.png';

class LocationPermission extends React.Component {
  render() {
    let icon = null;
    let headerText = null;
    let subText = null;
    let content = null;

    if (this.props.locationPermission === 'rejected') {
      icon = NoLocationIcon;
      headerText = 'Oh No';
      subText = 'Please enable location in settings to continue';
      content = (
        <FormButton
          handleSubmit={this.props.askForLocationPermission}
          text='I Enabled It'
        />
      );
    } else {
      icon = LocationIcon;
      headerText = 'Enable Location';
      subText = 'Location is required to match nearby people';
      content = (
        <FormButton
          handleSubmit={this.props.askForLocationPermission}
          text='Allow Location'
        />
      );
    }

    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.subText}>{subText}</Text>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  icon: {
    marginBottom: 50
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center'
  },
  subText: {
    color: '#777',
    marginBottom: 50,
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  locationPermission: state.permissions.location
});

const mapDispatchToProps = dispatch => ({
  askForLocationPermission: () => dispatch(askForLocationPermission())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationPermission);