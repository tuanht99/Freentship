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
});
