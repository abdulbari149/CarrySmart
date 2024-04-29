import { StyleSheet } from 'react-native';

import { Colors } from 'styles';
import { moderateScale } from 'utils/styles';

const CONTAINER_SIZE = moderateScale(25);
const CIRCLE_SIZE = CONTAINER_SIZE - 8;

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_SIZE,
    width: CONTAINER_SIZE,
    borderRadius: CONTAINER_SIZE,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE,
  },
});

export default styles;
