import React from 'react';

import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowLeft } from 'lucide-react-native';
import { Image, View, TouchableWithoutFeedback } from 'react-native';

import { Colors, Dimensions } from 'styles';
import assets from 'assets';
import Typography from 'components/Typography';
import { moderateScale } from 'utils/styles';

type HeaderComponent = (props: NativeStackHeaderProps) => JSX.Element;

const Header: HeaderComponent = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { options } = props;

  return (
    <View
      style={{
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 10,
        backgroundColor: Colors.white,
        width: '100%',
        height: Dimensions.height.size20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: Dimensions.width.size6,
        paddingVertical: Dimensions.height.size5,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() =>
          props.navigation.canGoBack() ? props.navigation.goBack() : undefined
        }
      >
        <ArrowLeft color={Colors.primary} size={Dimensions.width.size8} />
      </TouchableWithoutFeedback>
      <View
        style={{
          width: Dimensions.width.size50,
          height: Dimensions.height.size5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body1"
          style={{
            color: Colors.primary,
            textAlign: 'center',
            fontWeight: '600',
            fontSize: moderateScale(18),
          }}
        >
          {options?.title ?? ''}
        </Typography>
      </View>

      <Image
        source={assets.images.splashLogo}
        width={Dimensions.width.size12}
        height={Dimensions.height.size8}
        style={{
          width: Dimensions.width.size12,
          height: Dimensions.height.size6,
        }}
      />
    </View>
  );
};
export default Header;
