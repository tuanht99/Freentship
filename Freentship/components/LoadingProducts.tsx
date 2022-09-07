import { View } from 'react-native';
import styles from '../themes/LoadingProductsTheme';

export default function LoadingProducts() {
  return (
    <View style={styles.container}>
      <View style={styles.product_image} />
      <View style={styles.product}>
        <View style={styles.product_title} />
        <View style={styles.product_address}>
          <View style={styles.address_logoQC} />
          <View style={styles.address_iconDistance} />
          <View style={styles.address_titleDistance} />
        </View>
        <View style={styles.product_discount}>
          <View style={styles.discount_icon} />
          <View style={styles.discount_title} />
        </View>
      </View>
    </View>
  );
}
