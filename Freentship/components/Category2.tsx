import { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ProductModel } from '../views/HomeView';
import Products from './Products';
import styles from '../themes/Category2Theme';
import LoadingProducts from './LoadingProducts';

interface Props {
  data: ProductModel[];
  title: string;
}

const Category2: FC<Props> = ({ data, title }) => {
  const txtAllCategory = 'Xem tất cả';
  const txtShowAll = 'Xem tất cả Thử quán mới tại LOSHIP';
  if (data.length > 0) {
    return (
      <View style={styles.tryNewShop}>
        <View style={styles.tryNewShopTitle}>
          <Text style={styles.tryNewShop_title}>{title}</Text>
          <Text style={styles.tryNewShop_all}>{txtAllCategory}</Text>
        </View>
        <Products data={data} txtShowAll={txtShowAll} />
      </View>
    );
  } else {
    return (
      <View style={styles.tryNewShop}>
        <View style={styles.tryNewShopTitle}>
          <Text style={styles.tryNewShop_title}>{title}</Text>
          <Text style={styles.tryNewShop_all}>{txtAllCategory}</Text>
        </View>
        <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingVertical: 14 }}>
          <LoadingProducts />
          <LoadingProducts />
          <LoadingProducts />
          <LoadingProducts />
        </ScrollView>
      </View>
    );
  }
};

export default Category2;
