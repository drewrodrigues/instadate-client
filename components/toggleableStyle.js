import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function ToggleableStyle({
  activeStyle,
  children,
  containerStyle = {},
  inactiveStyle,
  selectedValue,
  value
}) {
  return (
    <View style={containerStyle}>
      {React.Children.map(children, component => (
        React.cloneElement(component, {
          style: (selectedValue === value ? activeStyle : inactiveStyle)
        })
      ))}
    </View>
  )
}

ToggleableStyle.propTypes = {
  activeStyle: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  containerStyle: PropTypes.object,
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