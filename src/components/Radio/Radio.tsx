import { TouchableOpacity, View } from 'react-native';
import React from 'react';

import { Colors } from 'styles';

import type { RadioComponent } from './radio.types';
import styles from './styles';

const Radio: RadioComponent = ({ selected, onChange = () => {}, ...props }) => (
  <TouchableOpacity
    {...props}
    style={[styles.container, props.style]}
    onPress={(event) => {
      if (props.onPress) props?.onPress(event);
      onChange();
    }}
  >
    <View
      style={[
        styles.circle,
        {
          backgroundColor: selected ? Colors.primary : Colors.white,
        },
      ]}
    />
  </TouchableOpacity>
);

export default Radio;
