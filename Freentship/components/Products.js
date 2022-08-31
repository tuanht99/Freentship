import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import Product from './Product';
import ProductsTheme from '../themes/ProductsTheme';

function Products(props) {
  const styles = {
    data1: { borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 8, marginStart: 14 },
    data2: { height: 140, width: 133, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
    data3: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  };
  return (
    <View style={ProductsTheme.container} >
      <View style={ProductsTheme.products1}>
        <Text style={ProductsTheme.products2} >
          {props.title}
        </Text>
        <Pressable style={{ flexDirection: 'row' }} onPress={() => console.log('Xem tat ca: ', props.title)}>
          <Text style={{ color: '#00A3FF', fontSize: 14 }}>Xem tất cả</Text>
        </Pressable>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ marginTop: 25, marginStart: -14 }}>
        {props.data.map((item, index) => (
          <Product key={index} nameImage={item.nameImage} text={item.text} numberAddress={item.numberAddress} discount={item.discount} style={styles} />
        ))}
        <View style={styles.data1}>
          <View style={ProductsTheme.products3}>
            <Text style={ProductsTheme.products4}>xem tất cả Thử quán mới tại LOSHIP</Text>
            <Image source={require('../assets/next.png')} style={{ height: 20, width: 20 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Products;
