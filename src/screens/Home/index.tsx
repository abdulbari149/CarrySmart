import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FlatList, Image, TouchableOpacity, View } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Trash, Settings } from 'lucide-react-native';

import SwipeButton from 'components/SwipeButton';

import type { PublicNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';

import assets from 'assets';

import { Dimensions } from 'styles';

import Radio from 'components/Radio';

import useBlockBackPress from 'hooks/use-block-back-press';

import styles from './styles';

type HomeProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.HOME
>;

type HomeScreen = React.FC<HomeProps>;

const Home: HomeScreen = ({ navigation }) => {
  useBlockBackPress(navigation);

  const [devices, setDevices] = useState([
    {
      id: 1,
      title: 'BT06',
    },
    {
      id: 2,
      title: 'RG227',
    },
    {
      id: 3,
      title: 'RG228',
    },
    {
      id: 4,
      title: 'RG229',
    },
    {
      id: 5,
      title: 'RG230',
    },
    {
      id: 6,
      title: 'BT210',
    },
    {
      id: 7,
      title: 'CG127',
    },
    {
      id: 8,
      title: 'RF387',
    },
    {
      id: 9,
      title: 'FG170',
    },
    {
      id: 10,
      title: 'RG732',
    },
    {
      id: 11,
      title: 'AG227',
    },
  ]);

  const [selectedDevice, setSelectedDevice] = useState<{
    id: number;
    title: string;
  } | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{ width: Dimensions.width.size12 }} />
          <Image
            style={styles.headerlogo}
            source={assets.images.splashLogo}
            alt="logo"
            resizeMode="contain"
          />

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate(SCREENS.ADD_DEVICE);
            }}
          >
            <Image
              style={styles.addButton}
              source={assets.images.addButton}
              alt="addButton"
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <FlatList
        data={devices}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          const isSelected = !!selectedDevice && selectedDevice.id === item.id;
          return (
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                navigation.navigate(SCREENS.DEVICE_SETTING);
              }}
              activeOpacity={1}
            >
              <View style={styles.item}>
                <View style={styles.itemLeft}>
                  <Radio
                    selected={isSelected}
                    onPress={(e) => {
                      e.stopPropagation();
                      setSelectedDevice(item);
                    }}
                  />
                  <View>
                    <Typography variant="body3" style={{ color: '#ab1516' }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 2,
                        backgroundColor: '#ab1516',
                        color: 'white',
                        borderRadius: 10,
                      }}
                    >
                      Disarmed
                    </Typography>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <View
                    style={{
                      width: Dimensions.width.size8,
                      height: Dimensions.width.size8,
                      borderRadius: Dimensions.width.size8 / 2,
                      backgroundColor: '#ab1516',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Settings color="#ffffff" size={Dimensions.width.size5} />
                  </View>
                  <TouchableOpacity
                    style={{
                      width: Dimensions.width.size8,
                      height: Dimensions.width.size8,
                      borderRadius: Dimensions.width.size8 / 2,
                      backgroundColor: '#ab1516',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    activeOpacity={1}
                    onPress={() =>
                      setDevices((prev) => prev.filter((d) => d.id !== item.id))
                    }
                  >
                    <Trash color="#ffffff" size={Dimensions.width.size5} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <SwipeButton text="Arm Device" />
    </View>
  );
};

export default Home;
