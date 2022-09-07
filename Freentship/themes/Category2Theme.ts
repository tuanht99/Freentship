import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  tryNewShop: {
    backgroundColor: Colors.greyColor,
    marginBottom: 14,
  },
  tryNewShopTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  tryNewShop_title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: Colors.textColor,
    textTransform: 'uppercase',
  },
  tryNewShop_all: {
    fontSize: 14,
    color: Colors.blueColor,
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
