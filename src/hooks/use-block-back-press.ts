import type { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

import { useStore } from 'jotai';

import navigationService from 'navigation/service'
import { SCREENS } from 'constants/screen-names';
import { initialRouteNameAtom } from 'store/atoms';

const useBlockBackPress = <ParamList extends ParamListBase, RouteName extends keyof ParamList>(navigation: NavigationProp<ParamList, RouteName>) => {
  const store = useStore()
  useEffect(() => {
    const navigationSubscription = navigation.addListener(
      'beforeRemove',
      () => { 
      },
    );
    const backHandleSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        const currentRoute = navigationService.getActiveRoute(navigation.getState());
        if (currentRoute?.name === SCREENS.HOME) {
          store.set(initialRouteNameAtom, SCREENS.HOME)
          BackHandler.exitApp();
        }
        return false;
      },
    );
    return () => {
      navigationSubscription();
      backHandleSubscription.remove();
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
};

export default useBlockBackPress;
