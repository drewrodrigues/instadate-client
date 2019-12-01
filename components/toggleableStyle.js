import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function ToggleableStyle({
  activeStyle,
  children,
  inactiveStyle,
  selectedValue,
  value
}) {
  return (
    <View>
      {React.Children.map(children, component => (
        component
      ))}
    </View>
  )
}

ToggleableStyle.propTypes = {
  activeStyle: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  inactiveStyle: PropTypes.object.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
};