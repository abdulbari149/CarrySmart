import { StyleSheet } from "react-native";

import { Colors, Dimensions } from "styles";
import { moderateScale } from "utils/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    backgroundColor: '#f3f3f3',
  },
  saveDetailsSwipe: {
    // position: 'absolute',
    // bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    marginVertical: Dimensions.height.size2,
  },
  form: {
    paddingHorizontal: 15,
  },
  card: {
    width: '100%',
    minHeight: Dimensions.height.size9,
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Dimensions.width.size5,
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: Dimensions.width.size10,
    paddingVertical: 5,
    width: '50%',
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: '600',
    fontSize: moderateScale(15),
  }
})

export default styles;