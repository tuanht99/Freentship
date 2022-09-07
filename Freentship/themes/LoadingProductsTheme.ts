import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, borderWidth: 0.5, borderColor: '#ccc', marginStart: 14, borderRadius: 8 },
  product: { paddingHorizontal: 8 },
  product_image: {
    width: 133,
    height: 140,
    backgroundColor: '#E0E0E0',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  product_title: { height: 24, backgroundColor: '#E3E3E3', marginVertical: 8, borderRadius: 2 },
  product_address: { flex: 1, flexDirection: 'row' },
  address_logoQC: { width: 20, height: 20, backgroundColor: '#E3E3E3', borderRadius: 4 },
  address_iconDistance: {
    width: 20,
    height: 20,
    backgroundColor: '#E3E3E3',
    marginHorizontal: 8,
    borderRadius: 25,
  },
  address_titleDistance: { flex: 1, height: 20, backgroundColor: '#E3E3E3', borderRadius: 2 },
  product_discount: { flex: 1, flexDirection: 'row', marginVertical: 8 },
  discount_icon: { width: 20, height: 20, backgroundColor: '#E3E3E3', borderRadius: 50 },
  discount_title: {
    flex: 1,
    height: 20,
    backgroundColor: '#E3E3E3',
    marginStart: 8,
    borderRadius: 2,
  },
});
