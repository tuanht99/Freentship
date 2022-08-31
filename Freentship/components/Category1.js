import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import Product from './Product';
import Category1Theme from '../themes/Category1Theme';

function Category1(props) {
  const styles = {
    data1: { marginStart: 14 },
    data2: { height: 140, width: 133 },
    data3: { textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  };
  props.data.push({ nameImage: '', text: '', numberAddress: '', discount: '', id: 9 });

  return (
    <View style={Category1Theme.container} >
      <View style={Category1Theme.category1}>
        <Text style={Category1Theme.category2} >
          {props.title}
        </Text>
        <Pressable style={{ flexDirection: 'row' }} onPress={() => console.log('Xem tat ca: ', props.title)}>
          <Text style={{ color: '#00A3FF', fontSize: 14 }}>Xem tất cả</Text>
        </Pressable>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ marginTop: 25, marginStart: -14 }}>
        {props.data.map((item, index) => (
          <Product key={index} nameImage={item.nameImage} text={item.text} style={styles} />
        ))}
        <View style={styles.data1}>
          <View style={Category1Theme.category3}>
            <Text style={Category1Theme.category4}>xem tất cả Thử quán mới tại LOSHIP</Text>
            <Image source={require('../assets/next.png')} style={{ height: 20, width: 20 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Category1;
