import { atom } from 'jotai';


import type { PublicNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import type { AllOptionalKeys } from 'types/utils';


// eslint-disable-next-line import/prefer-default-export
export const initialRouteNameAtom = atom<
  AllOptionalKeys<PublicNavigatorParamList>
>(SCREENS.SPLASH);
