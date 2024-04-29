import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Image, View } from 'react-native';

import useBootstrapApp from 'hooks/use-bootstrap-app';
import type { PublicNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

import assets from 'assets';

import styles from './styles';

type SplashProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.SPLASH
>;

type SplashScreen = React.FC<SplashProps>;

const Splash: SplashScreen = ({ navigation }) => {
  useBootstrapApp({
    async onComplete() {
      return navigation.navigate(SCREENS.HOME);
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={assets.images.splashLogo}
        alt="Splash logo"
        resizeMode="contain"
        style={styles.splashLogo}
      />
    </View>
  );
};

export default Splash;
