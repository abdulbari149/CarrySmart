import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Minus, Plus } from 'lucide-react-native';

import Typography from 'components/Typography';
import { Colors, Dimensions } from 'styles';

type CounterProps = {
  value: number;
  displayValue: string;
  onIncrement: () => void;
  onDecrement: () => void;
};

type CounterComponent = (props: CounterProps) => JSX.Element;

const Counter: CounterComponent = (props) => (
  <View
    style={{
      flexDirection: 'row',
      gap: Dimensions.width.size3,
      alignItems: 'center',
    }}
  >
    <TouchableOpacity
      activeOpacity={1}
      style={{
        borderWidth: 2,
        borderRadius: Dimensions.width.size100,
        borderColor: Colors.primary,
        padding: 4,
      }}
      onPress={props.onIncrement}
    >
      <Plus color="#000000" size={12} fill="#000000" fontWeight="bold" />
    </TouchableOpacity>
    <Typography variant="body2" style={{ color: Colors.primary }}>
      {props.displayValue}
    </Typography>
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderRadius: Dimensions.width.size100,
        borderColor: Colors.primary,
        padding: 4,
      }}
      activeOpacity={1}
      onPress={props.onDecrement}
      disabled={props.value === 0}
    >
      <Minus color="#000000" size={12} fill="#000000" fontWeight="bold" />
    </TouchableOpacity>
  </View>
);

export default Counter;
