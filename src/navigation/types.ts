/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import type { StackNavigationOptions } from '@react-navigation/stack';

import type { SCREENS, NAVIGATORS } from 'constants/screen-names';

export type ScreensParamsList = {
  [SCREENS.DEV_MENU]: undefined;
  [SCREENS.DEV_STORY_BOOK]: undefined;
  [SCREENS.SPLASH]: undefined;
  [SCREENS.HOME]: undefined;
  [SCREENS.ADD_DEVICE]: undefined;
  [SCREENS.DEVICE_SETTING]: undefined
};

export type DevScreens =
  | typeof SCREENS.DEV_MENU
  | typeof SCREENS.DEV_STORY_BOOK;

export type PublicScreens =
  | typeof SCREENS.SPLASH
  | typeof SCREENS.HOME
  | typeof SCREENS.ADD_DEVICE
  | typeof SCREENS.DEVICE_SETTING;

export type PublicNavigatorParamList = Pick<ScreensParamsList, PublicScreens>;

export type DevNavigatorParamList = Pick<ScreensParamsList, DevScreens>;

export type MainNavigatorParamList = {
  [NAVIGATORS.DEV]: NavigatorScreenParams<DevNavigatorParamList>;
  [NAVIGATORS.PUBLIC]: NavigatorScreenParams<PublicNavigatorParamList>;
};
export type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

export type DevScreenComponent = ScreenComponentType<DevNavigatorParamList>;
export type PublicScreenComponent = ScreenComponentType<
  PublicNavigatorParamList
>;

type ScreenConfig<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  ScreenName extends keyof List = keyof List,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions
> = {
  component: React.FC<NativeStackScreenProps<List, ScreenName>>;
  options?: Options;
};

type NavigationRoutes<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions
> = {
  [ScreenName in keyof List]: ScreenConfig<List, ScreenName, Options>;
};

export type PublicRoutes = NavigationRoutes<
  PublicNavigatorParamList,
  NativeStackNavigationOptions
>;
export type DevRoutes = NavigationRoutes<
  DevNavigatorParamList,
  StackNavigationOptions
>;
