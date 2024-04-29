import type { TouchableOpacityProps } from 'react-native';

export interface RadioProps extends TouchableOpacityProps {
  selected: boolean;
  onChange?: () => void;
}

export type RadioComponent = React.FunctionComponent<RadioProps>;
