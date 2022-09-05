import { FC } from 'react';
import { View, Text } from 'react-native';
import { ProductModel } from '../views/HomeView';
import Products from './Products';
import styles from '../themes/Category2Theme';

interface Props {
  data: ProductModel[];
  title: string;
}

const Category2: FC<Props> = ({ data, title }) => {
  const txtAllCategory = 'Xem tất cả';

  return (
    <View style={styles.tryNewShop}>
      <View style={styles.tryNewShopTitle}>
        <Text style={styles.tryNewShop_title}>{title}</Text>
        <Text style={styles.tryNewShop_all}>{txtAllCategory}</Text>
      </View>
      <Products data={data} />
    </View>
  );
};

export default Category2;
