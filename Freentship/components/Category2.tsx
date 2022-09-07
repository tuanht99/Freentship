import { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ProductModel } from '../views/HomeView';
import Products from './Products';
import styles from '../themes/Category2Theme';
import LoadingProducts from './LoadingProducts';
import Ionicon from 'react-native-vector-icons/Ionicons';

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
          <View style={styles.product_showAll}>
            <Text style={styles.showAll_title}>{txtShowAll}</Text>
            <Ionicon
              name="arrow-forward"
              size={styles.showAll_icon.fontSize}
              color={styles.showAll_icon.color}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default Category2;
