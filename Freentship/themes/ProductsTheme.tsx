import { StyleSheet } from "react-native";
import Colors from './colors';

export default StyleSheet.create({
    tryNewShopProductList: {
    marginBottom: 14,
  },
  product_showAll: {
    width: 133,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.menuGrey,
    marginStart: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showAll_title: {
    color: Colors.mainColor,
    textAlign: 'center',
    fontSize: 18,
  },
  showAll_icon: {
    fontSize: 24,
    color: Colors.mainColor,
  },
});
