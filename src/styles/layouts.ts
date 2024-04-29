import { StyleSheet } from 'react-native';

import { moderateScale } from 'utils/styles';

import Spacing from './spacing';
import Colors from './colors';

const Layouts = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  over: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  card: {
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    gap: 10,
    elevation: 3,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size8,
    paddingVertical: Spacing.vertical.size20,
  },
});

export default Layouts;
