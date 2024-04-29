import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowRight } from 'lucide-react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { View } from 'react-native';

import { Dimensions } from 'styles';
import Typography from 'components/Typography';

import styles from './styles';

type SwipeButtonProps = {
  text: string;
};

type SwipeButtonComponent = (props: SwipeButtonProps) => JSX.Element;
const END_POSITION = Dimensions.width.size75;

const SwipeButton: SwipeButtonComponent = (props) => {
  const onLeft = useSharedValue(true);
  const position = useSharedValue(0);
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (onLeft.value) {
        position.value = e.translationX;
      } else {
        position.value = END_POSITION + e.translationX;
      }
    })
    .onEnd(() => {
      if (position.value > END_POSITION / 2) {
        position.value = withTiming(END_POSITION, { duration: 100 });
        onLeft.value = false;
      } else {
        position.value = withTiming(0, { duration: 100 });
        onLeft.value = true;
      }
    });

  const pathAnimatedStyle = useAnimatedStyle(() => ({
    display: 'flex',
    width: Dimensions.width.size18,
    height: Dimensions.width.size18,
    borderRadius: Dimensions.width.size25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 5,
    transform: [{ translateX: position.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={styles.sliderContainer}>
        <Animated.View style={pathAnimatedStyle}>
          <ArrowRight size={Dimensions.width.size8} color="#ab1516" />
        </Animated.View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flex: 1,
          }}
        >
          <Typography
            variant="body2"
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              color: 'white',
            }}
          >
            {props.text}
          </Typography>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default SwipeButton;
