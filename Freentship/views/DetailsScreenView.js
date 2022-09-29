import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppStyle from "../themes/IndexTheme";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import stylesDetail from "../themes/DetailsProductTheme";

const DATA = {
  id: 1,
  name: "Nước ngọt c2",
  discription: "Thơm ngon mời bạn ăn nha, getgo, getgo,...",
  location: "",
  relationship: "Đối tác lo ship",
  price: "20.000",
  status: "",
  shopaddress: "52 Bế văn đàn, an bình, dĩ an, bình dương",
  shopSl: "14 sản phẩm",
  shopname: "Tea 1998",
  shopimage: require("../assets/nuoc_c2.png"),
  monAn1: require("../assets/monAn1.png"),
  txtChonMua: "CHỌN MUA",
  txtsplq: "Sản phẩm cùng cửa hàng",
  txtXemCuaHang: "Xem cửa hàng",
  txtDis: "Thông tin sản phẩm",
};

// Navigation
export default function DetailsScreenView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: DATA.name,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 15,
      },
      
    });
  }, [navigation]);
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Image */}
      <View>
        <Image source={DATA.shopimage} style={stylesDetail.shopImage} />
      </View>

      {/* thong tin mon */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={stylesDetail.container}>
          <Text numberOfLines={2} style={{ fontWeight: "bold", paddingBottom: 10 }}>{DATA.name}</Text>
          <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>{DATA.price}</Text>
          <Text numberOfLines={2} style={{ paddingBottom: 20 }}>{DATA.shopaddress}</Text>
        </View>

        <View style={stylesDetail.container}>
          <TouchableOpacity style={stylesDetail.btnChonMua}>
            <Text style={stylesDetail.txtChonMua}>{DATA.txtChonMua}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={stylesDetail.space}></View>

      {/* dis */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={stylesDetail.container}>
          <Text numberOfLines={5}
            style={{ fontWeight: "bold", paddingTop: 10, paddingBottom: 20 }}
          >
            {DATA.txtDis}
          </Text>
          <Text style={{ paddingBottom: 20 }}>{DATA.discription}</Text>
        </View>
      </View>

      <View style={stylesDetail.space}></View>

      {/* mon cung cua hang */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={stylesDetail.container}>
          <Text
            style={{ fontWeight: "bold", paddingTop: 10, paddingBottom: 20 }}
          >
            {DATA.txtsplq}
          </Text>
          {/* shop */}
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 20,
              alignItems: "center",
            }}
          >
            <Image source={DATA.monAn1} style={stylesDetail.imageMini} />

            <View style={{ paddingLeft: 10 }}>
              <Text numberOfLines={1} style={{ fontWeight: "bold", width: 180 }}>{DATA.shopname}</Text>
              <Text>{DATA.shopSl}</Text>
              <Text numberOfLines={1} style={{color: '#808080', width: 190}}>{DATA.shopaddress}</Text>
            </View>
            {/* // */}
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity style={stylesDetail.btnXemCuaHang}>
                <Text style={stylesDetail.txtXemCuaHang}>{DATA.txtXemCuaHang}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* mon lien quan */}
          <ScrollView style={{ paddingBottom: 10 }} horizontal={true}>
            <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
              <View style={{ paddingRight: 5, flex: 1 }}>
                <Image source={DATA.monAn1} style={stylesDetail.imglq} />
                <Text numberOfLines={2} style={{ fontSize: 12, width: 70 }}>
                  {DATA.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {DATA.price}
                </Text>
              </View>

              <View style={{ paddingRight: 5, flex: 1 }}>
                <Image source={DATA.monAn1} style={stylesDetail.imglq} />
                <Text numberOfLines={2} style={{ fontSize: 12, width: 70 }}>
                  {DATA.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {DATA.price}
                </Text>
              </View>

              <View style={{ paddingRight: 5, flex: 1 }}>
                <Image source={DATA.monAn1} style={stylesDetail.imglq} />
                <Text numberOfLines={2} style={{ fontSize: 12, width: 70 }}>
                  {DATA.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {DATA.price}
                </Text>
              </View>

              <View style={{ paddingRight: 5, flex: 1 }}>
                <Image source={DATA.monAn1} style={stylesDetail.imglq} />
                <Text numberOfLines={2} style={{ fontSize: 12, width: 70 }}>
                  {DATA.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {DATA.price}
                </Text>
              </View>

              <View style={{ paddingRight: 5, flex: 1 }}>
                <Image source={DATA.monAn1} style={stylesDetail.imglq} />
                <Text numberOfLines={2} style={{ fontSize: 12, width: 70 }}>
                  {DATA.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {DATA.price}
                </Text>
              </View>

              <View style={{ paddingRight: 5, flex: 1 }}>
                <Image source={DATA.monAn1} style={stylesDetail.imglq} />
                <Text numberOfLines={2} style={{ fontSize: 12, width: 70 }}>
                  {DATA.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {DATA.price}
                </Text>
              </View>
              
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}


