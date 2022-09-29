import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppStyle from "../themes/IndexTheme";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import stylesEditMenu from "../themes/EditMenuTheme";

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

  txtDis: "Thông tin sản phẩm",
};

// Navigation
export default function AddCategoryFoodView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: "Chỉnh sửa món",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15,
      },
    });
  }, [navigation]);

  const [text, onChangeText] = React.useState("");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.8 }}>
        {/* image */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={stylesEditMenu.container}>
            <View style={{ paddingRight: 10 }}>
              <View
                style={{
                  borderRadius: 15,
                  borderColor: "#E94730",
                  borderWidth: 1,
                }}
              >
                <View>
                  <Image
                    source={DATA.shopimage}
                    style={stylesDetail.shopImage}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesEditMenu.space}></View>

        {/* ten danh muc */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={stylesEditMenu.container}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Danh mục</Text>
            </View>

            <View>
              {/* // */}
              <View style={{ marginRight: 10 }}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: "#E94730",
                    borderRadius: 5,
                  }}
                  placeholder={'Trà sữa'}
                  onChangeText={onChangeText}
                  value={text}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>

        {/* Nhập tên món ăn */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={stylesEditMenu.container}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Nhập tên món ăn</Text>
            </View>

            <View>
              {/* // */}
              <View style={{ marginRight: 10 }}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: "#E94730",
                    borderRadius: 5,
                  }}
                  placeholder={'bún chả cá'}
                  onChangeText={onChangeText}
                  value={text}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>

        {/* Giá */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={stylesEditMenu.container}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Giá bán (tối thiểu 20.000)</Text>
            </View>

            <View>
              {/* // */}
              <View style={{ marginRight: 10 }}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: "#E94730",
                    borderRadius: 5,
                  }}
                  placeholder={'25.000'}
                  onChangeText={onChangeText}
                  value={text}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>

        {/* Mô tả */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={stylesEditMenu.container}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Mô tả (nếu có)</Text>
            </View>

            <View>
              {/* // */}
              <View style={{ marginRight: 10 }}>
                <TextInput
                  style={{
                    height: 120,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: "#E94730",
                    borderRadius: 5,
                  }}
                  placeholder={'thơm ngon'}
                  onChangeText={onChangeText}
                  value={text}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesEditMenu.space}></View>

        {/* Hien thi tren menu */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={stylesEditMenu.container}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text>Hiển thị trên menu</Text>
              </View>
              <View style={{paddingRight: 10}}>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={stylesEditMenu.space}></View>

        {/* Xoa danh muc */}
        <View style={stylesEditMenu.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{paddingRight: 10}}>
            <AntDesign name="delete" size={24} color="black" />
          </View>
          <View>
            <Text>Xóa danh mục</Text>
          </View>
          </View>
          
        </View>          

      </ScrollView>
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
            width: "100%",
            borderTopColor: "#808080",
            borderTopWidth: 0.3,

            bottom: 0,
          }}
        >
          <View style={stylesEditMenu.container}>
            <TouchableOpacity style={stylesEditMenu.btnChonMua}>
              <Text style={stylesEditMenu.txtChonMua}>Thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
