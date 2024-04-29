import { StyleSheet } from "react-native";

import { Dimensions } from "styles";

const styles = StyleSheet.create({
  sliderContainer: {
    width: Dimensions.width.size95,
    height: Dimensions.width.size20,
    backgroundColor: '#ab1516',
    borderRadius: Dimensions.width.size25,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  sliderButton: {
    width: Dimensions.width.size18,
    height: Dimensions.width.size18,
    borderRadius: Dimensions.width.size25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles;