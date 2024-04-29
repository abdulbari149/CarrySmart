import { StyleSheet } from 'react-native';

import { Dimensions, Colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  splashLogo: {
    width: Dimensions.width.size75,
    height: Dimensions.height.size25,
  },
});

export default styles;
