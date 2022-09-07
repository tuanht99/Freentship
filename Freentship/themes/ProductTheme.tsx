import { StyleSheet } from 'react-native';
import Colors from './colors';

const baseStyle = StyleSheet.create({
  product: {
    width: 133,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.menuGrey,
    marginStart: 14,
  },
});

export default StyleSheet.create({
  product: {
    ...baseStyle.product,
  },
  product_image: {
    height: 140,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  product_title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 8,
  },
  product_advertisement: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  advertisement_icon: {
    color: Colors.darkColor,
    fontSize: 24,
  },
  advertisement_image: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginEnd: 4,
  },
  advertisement_title: {
    marginStart: 4,
  },
  advertisement_discount: {
    paddingBottom: 14,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
});
