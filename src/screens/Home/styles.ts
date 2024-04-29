import { StyleSheet } from "react-native";

import { Dimensions } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#FF0000',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },
  headerlogo: {   
    width: Dimensions.width.size15,
    height: Dimensions.height.size8,
  },
  addButton: {
    width: Dimensions.width.size15,
    height: Dimensions.height.size8,
  },
  sliderContainer: {
    width: Dimensions.width.size95,
    backgroundColor: '#ab1516',
    borderRadius: Dimensions.width.size25,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderButton: {
    width: Dimensions.width.size18,
    height: Dimensions.width.size18,
    borderRadius: Dimensions.width.size25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    width: Dimensions.width.size95,
    borderRadius: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: Dimensions.width.size95,
    padding: 20,
    elevation: 2,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ececec',
    marginBottom: 15,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  }
})

export default styles;