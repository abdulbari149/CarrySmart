import { Platform } from "react-native";
import colors from "./colors";

export default {
  primary: {
    elevation: Platform.select({ ios: 3, android: 10 }),
    shadowColor: `${colors.black}44`,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  }
}