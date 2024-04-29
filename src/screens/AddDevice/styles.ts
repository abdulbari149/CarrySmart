import { StyleSheet } from "react-native";

import { Colors, Dimensions } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  refreshText: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: Dimensions.width.size10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default styles;
