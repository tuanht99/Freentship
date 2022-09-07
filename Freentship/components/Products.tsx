import { ScrollView, Text, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Product from './Product';
import styles from '../themes/ProductsTheme';
import { ProductModel } from '../views/HomeView';
import { FC } from 'react';

interface Props {
  data: ProductModel[];
  txtShowAll: string;
}

const Products: FC<Props> = ({ data, txtShowAll }) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.tryNewShopProductList}>
      {data.map((item, index) => (
        <Product
          key={index}
          sourceImage={item.sourceImage}
          title={item.title}
          distance={item.distance}
          discount={item.discount}
        />
      ))}
      <View style={styles.product_showAll}>
        <Text style={styles.showAll_title}>{txtShowAll}</Text>
        <Ionicon
          name="arrow-forward"
          size={styles.showAll_icon.fontSize}
          color={styles.showAll_icon.color}
        />
      </View>
    </ScrollView>
  );
};

export default Products;
