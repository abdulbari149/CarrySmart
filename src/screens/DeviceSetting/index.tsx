import React from 'react';

import { Switch, TextInput, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { PublicNavigatorParamList } from 'navigation/types';

import SwipeButton from 'components/SwipeButton';

import { Colors } from 'styles';
import Typography from 'components/Typography';

import useFormState from 'hooks/use-form-state';

import Counter from 'components/Counter';

import styles from './styles';

type DeviceSettingProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.DEVICE_SETTING
>;

type DeviceSettingScreen = React.FC<DeviceSettingProps>;

const DeviceSetting: DeviceSettingScreen = () => {
  const { values, handleChange } = useFormState({
    name: 'BT06',
    btUUID: '84:B4:DB:21:ED:0A',
    warningTone: 'Siren',
    warningToneEnabled: false,
    hapticAlert: false,
    textAlert: false,
    microphoneEnabled: false,
    delay: 0,
    microphone: 0,
  });
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.card}>
          <Typography variant="body2" style={{ color: Colors.primary }}>
            Name
          </Typography>

          <TextInput
            value={values.name}
            onChangeText={handleChange('name')}
            style={styles.input}
          />
        </View>

        <View style={styles.card}>
          <Typography variant="body2" style={{ color: Colors.primary }}>
            BT UID
          </Typography>
          <TextInput
            value={values.btUUID}
            onChangeText={handleChange('btUUID')}
            style={styles.input}
          />
        </View>

        <View style={styles.card}>
          <Typography variant="body2" style={{ color: Colors.primary }}>
            Warning Tone
          </Typography>
          <TextInput
            value={values.warningTone}
            onChangeText={handleChange('warningTone')}
            style={[styles.input, { width: '35%' }]}
          />
          <Switch
            trackColor={{ false: '#ffbdbe', true: '#ffbdbe' }}
            thumbColor={values.warningToneEnabled ? '#f90004' : '#ececec'}
            ios_backgroundColor="#ffbdbe"
            onValueChange={handleChange('warningToneEnabled')}
            value={values.warningToneEnabled}
            style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
          />
        </View>

        <View style={styles.card}>
          <Typography variant="body2" style={{ color: Colors.primary }}>
            Vibration / Haptic Alert
          </Typography>
          <Switch
            trackColor={{ false: '#ffbdbe', true: '#ffbdbe' }}
            thumbColor={values.hapticAlert ? '#f90004' : '#ececec'}
            ios_backgroundColor="#ffbdbe"
            onValueChange={handleChange('hapticAlert')}
            value={values.hapticAlert}
            style={{
              transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
            }}
          />
        </View>

        <View style={styles.card}>
          <Typography variant="body2" style={{ color: Colors.primary }}>
            Delay
          </Typography>

          <Counter
            value={values.delay}
            displayValue={`${values.delay.toString().padStart(2, '0')} sec`}
            onDecrement={() => {
              handleChange('delay')((prev) => prev - 1);
            }}
            onIncrement={() => {
              handleChange('delay')((prev) => prev + 1);
            }}
          />
        </View>

        <View style={styles.card}>
          <Typography variant="body2" style={{ color: Colors.primary }}>
            Microphone
          </Typography>
          <Counter
            value={values.microphone}
            displayValue={`${values.microphone.toString()} min`}
            onDecrement={() => {
              handleChange('microphone')((prev) => prev - 1);
            }}
            onIncrement={() => {
              handleChange('microphone')((prev) => prev + 1);
            }}
          />
          <Switch
            trackColor={{ false: '#ffbdbe', true: '#ffbdbe' }}
            thumbColor={values.microphoneEnabled ? '#f90004' : '#ececec'}
            ios_backgroundColor="#ffbdbe"
            onValueChange={handleChange('microphoneEnabled')}
            value={values.microphoneEnabled}
            style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
          />
        </View>

        <View style={styles.card}>
          <Typography variant="body2" style={{ color: Colors.primary }}>
            Text Alert
          </Typography>
          <Switch
            trackColor={{ false: '#ffbdbe', true: '#ffbdbe' }}
            thumbColor={values.textAlert ? '#f90004' : '#ececec'}
            ios_backgroundColor="#ffbdbe"
            onValueChange={handleChange('textAlert')}
            value={values.textAlert}
            style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
          />
        </View>
      </View>

      <View style={styles.saveDetailsSwipe}>
        <SwipeButton text="Save Details" />
      </View>
    </View>
  );
};

export default DeviceSetting;
