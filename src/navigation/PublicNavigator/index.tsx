import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAtomValue } from 'jotai';

import { SCREENS } from 'constants/screen-names';

import type { PublicNavigatorParamList } from 'navigation/types';

import { Splash, Home, AddDevice, DeviceSetting } from 'screens';

import Header from 'components/Header';
import { initialRouteNameAtom } from 'store/atoms';

const { SPLASH, HOME } = SCREENS;

const Stack = createNativeStackNavigator<PublicNavigatorParamList>();

const PublicNavigator = () => {
  const initialRouteName = useAtomValue(initialRouteNameAtom);
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        {/* {!isClosed && ( */}
        {initialRouteName === SPLASH && (
          <Stack.Screen name={SPLASH} component={Splash} key={SPLASH} />
        )}
        {/* )} */}
        <Stack.Screen name={HOME} component={Home} key={HOME} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name={SCREENS.ADD_DEVICE}
          key={SCREENS.ADD_DEVICE}
          component={AddDevice}
          options={{
            title: 'Add Device',
            header: Header,
          }}
        />
        <Stack.Screen
          name={SCREENS.DEVICE_SETTING}
          key={SCREENS.DEVICE_SETTING}
          component={DeviceSetting}
          options={{
            title: 'Device Setting',
            header: Header,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default PublicNavigator;
