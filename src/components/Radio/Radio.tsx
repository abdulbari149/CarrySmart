import { TouchableOpacity, View } from 'react-native';
import React from 'react';

import { Colors } from 'styles';

import type { RadioComponent } from './radio.types';
import styles from './styles';

const Radio: RadioComponent = ({ selected, onChange = () => {}, ...props }) => (
  <TouchableOpacity
    onPress={(event) => {
      onChange(event);
    }}
    style={{
      width: styles.container.width * 1.5,
      height: styles.container.height * 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View {...props} style={[styles.container, props.style]}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: selected ? Colors.primary : Colors.white,
          },
        ]}
      />
    </View>
  </TouchableOpacity>
);

export default Radio;
