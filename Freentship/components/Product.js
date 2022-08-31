import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ProductTheme from '../themes/ProductTheme';

function Product(props) {
  return (
    <View style={props.style.data1}>
      <Image source={{ url: props.nameImage }}
        style={props.style.data2} />
      <View style={{ paddingHorizontal: 4, paddingBottom: 8 }}>
        <Text style={props.style.data3}>{props.text}</Text>
        {props.numberAddress && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/qc.png')} style={{ height: 20, width: 20 }} />
          <Ionicon name="location" size={20} color="#E94730" style={{ marginHorizontal: 4 }} />
          <Text>{props.numberAddress} Km</Text>
        </View>}
        {props.discount && <View style={ProductTheme.product1}>
          <Image source={require('../assets/discount.png')} style={ProductTheme.product2} />
          <Text>Giảm {props.discount}%</Text>
        </View>}
        {props.isButton && <TouchableOpacity style={ProductTheme.product3}>
          <Text>Chọn mua</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
}

export default Product;
