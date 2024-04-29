import React from 'react';
import { View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// import StorybookUI from 'storybook';

import type { SCREENS } from 'constants/screen-names';
import type { DevNavigatorParamList } from 'navigation/types';

import Typography from 'components/Typography';

import styles from './styles';

type DevStoryBookProps = NativeStackScreenProps<
  DevNavigatorParamList,
  typeof SCREENS.DEV_STORY_BOOK
>;

type DevStoryBookScreen = React.FC<DevStoryBookProps>;

const DevStoryBook: DevStoryBookScreen = () => (
  <View style={styles.container}>
    {/* <StorybookUI /> */}
    <Typography variant="body1">Story Book not current available</Typography>
  </View>
);

export default DevStoryBook;
