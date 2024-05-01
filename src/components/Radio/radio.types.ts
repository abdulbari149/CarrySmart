import type { GestureResponderEvent, ViewProps } from 'react-native';

export interface RadioProps extends ViewProps {
  selected: boolean;
  onChange?: (event: GestureResponderEvent) => void;
}

export type RadioComponent = React.FunctionComponent<RadioProps>;
