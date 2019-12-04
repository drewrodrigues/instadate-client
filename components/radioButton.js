import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default function RadioButton({
  activeStyle,
  inactiveStyle,
  children,
  key,
  selectedValue,
  value,
  updateCallback,
}) {
  return (
    <TouchableOpacity
      key={key}
      onPress={() => updateCallback(value)}
      style={selectedValue === value ? activeStyle : inactiveStyle}
    >
      {children}
    </TouchableOpacity>
  );
}

RadioButton.propTypes = {
  activeStyle: PropTypes.object.isRequired,
  inactiveStyle: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  key: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  updateCallback: PropTypes.func.isRequired,
};
