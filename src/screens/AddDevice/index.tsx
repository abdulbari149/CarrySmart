import React, { useState } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import {
//   useCode,
//   cond,
//   eq,
//   set,
//   startClock,
//   clockRunning,
//   not,
//   useSharedValue,
// } from 'react-native-reanimated'; // Import necessary functions from react-native-reanimated

import { Animated, Easing, TouchableWithoutFeedback, View } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { RefreshCwIcon } from 'lucide-react-native';

import type { SCREENS } from 'constants/screen-names';
import type { PublicNavigatorParamList } from 'navigation/types';

import Typography from 'components/Typography';
import { Colors, Dimensions } from 'styles';

import styles from './styles';

type AddDeviceProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.ADD_DEVICE
>;

type AddDeviceScreen = React.FC<AddDeviceProps>;

const AddDevice: AddDeviceScreen = () => {
  const [, setIsRefreshing] = useState(false);
  const [rotation] = useState(new Animated.Value(0));
  const rotateIcon = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rotation.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.refreshText}>
        <Typography variant="body3" style={{ color: Colors.white }}>
          Available Devices
        </Typography>
        <TouchableWithoutFeedback
          onPress={() => {
            setIsRefreshing(true);
            rotateIcon(); // Call rotateIcon function when the button is pressed
          }}
        >
          <Animated.View // Replace RefreshCwIcon with Animated.View
            style={{
              transform: [
                {
                  rotate: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          >
            <RefreshCwIcon
              color={Colors.white}
              size={Dimensions.width.size5}
              style={{ transform: [{ rotate: '20deg' }] }}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AddDevice;
