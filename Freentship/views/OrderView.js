import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import stylesOrder from "../themes/CartTheme";

const DATA = {
  id: 1,
  name: "Nước ngọt c2",
  namesp: "Gì cũng đc, miễn là cùng cửa hàng",
  namesp2: "Khi thêm món khác cửa hàng thì làm mới giỏ hàng",
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
  avt: require("../assets/gaubeo.jpg"),
  userName: "Phú",
  txtyour: "bạn",
  txtDatDon: "Đặt đơn",
  txtsplq: "Sản phẩm cùng cửa hàng",
  txtXemCuaHang: "Xem cửa hàng",
  txtDis: "Thông tin sản phẩm",
  txtThayDoi: "Thay đổi",
  txtTong: "60.000",
  txtPttt: "Trả tiền mặt khi nhận hàng",
};

// Navigation
export default function OrderView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),

      title: "Đơn hàng của bạn",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15,
      },
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 8 }}>
        <View style={stylesOrder.space}></View>

        {/* giao toi dia chi */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          <View style={stylesOrder.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "bold",
                    paddingBottom: 10,
                    fontSize: 20,
                  }}
                >
                  GIAO TỚI ĐỊA CHỈ
                </Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#00C2FF",
                      paddingRight: 10,
                    }}
                  >
                    {DATA.txtThayDoi}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center", paddingRight: 10 }}>
                <AntDesign name="enviroment" size={24} color="#E94730" />
              </View>

              <View style={{ alignItems: "center" }}>
                <Text numberOfLines={2}>{DATA.shopaddress}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesOrder.space}></View>

        {/*chi tiết đơn hàng in4 name */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomWidth: 0.3,
            borderBottomColor: "#808080",
          }}
        >
          <View style={stylesOrder.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "bold",
                    paddingBottom: 10,
                    fontSize: 20,
                  }}
                >
                  CHI TIẾT ĐƠN HÀNG
                </Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#00C2FF",
                      paddingRight: 10,
                    }}
                  >
                    Thêm món
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={DATA.avt} style={stylesOrder.imageMini} />

              <View style={{ paddingLeft: 10 }}>
                <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
                  {DATA.userName}
                </Text>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text
                  numberOfLines={1}
                  style={{ color: "#808080", width: 190 }}
                >
                  ({DATA.txtyour})
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* san pham da them vao gio hang */}
        <View>
          {/* ne */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <View style={stylesOrder.container}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 50,
                }}
              >
                <View>
                  <Text numberOfLines={1}>{DATA.name}</Text>
                </View>
                <View>
                  <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                    {DATA.price}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <TouchableOpacity style={stylesOrder.btnThayDoi}>
                    <Text style={stylesOrder.txtThayDoi}>
                      {DATA.txtThayDoi}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 0.4,
                    paddingRight: 10,
                  }}
                >
                  <View>
                    <TouchableOpacity style={stylesOrder.btnSl}>
                      <Text style={{ fontWeight: "bold" }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>01</Text>
                  </View>
                  <View>
                    <TouchableOpacity style={stylesOrder.btnSl}>
                      <Text style={{ fontWeight: "bold" }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <View style={stylesOrder.container}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 50,
                }}
              >
                <View>
                  <Text numberOfLines={1}>{DATA.name}</Text>
                </View>
                <View>
                  <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                    {DATA.price}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <TouchableOpacity style={stylesOrder.btnThayDoi}>
                    <Text style={stylesOrder.txtThayDoi}>
                      {DATA.txtThayDoi}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*  */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 0.4,
                    paddingRight: 10,
                  }}
                >
                  <View>
                    <TouchableOpacity style={stylesOrder.btnSl}>
                      <Text style={{ fontWeight: "bold" }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>01</Text>
                  </View>
                  <View>
                    <TouchableOpacity style={stylesOrder.btnSl}>
                      <Text style={{ fontWeight: "bold" }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Phí ship */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 20,
            borderTopWidth: 0.3,
            borderTopColor: "#808080",
          }}
        >
          <View style={stylesOrder.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text numberOfLines={1}>Phí ship</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingRight: 10,
                  }}
                >
                  {DATA.price}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesOrder.space}></View>

        {/* phương thức thanh toán */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          <View style={stylesOrder.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "bold",
                    paddingBottom: 10,
                    fontSize: 20,
                  }}
                >
                  CÁCH THANH TOÁN
                </Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#00C2FF",
                      paddingRight: 10,
                    }}
                  >
                    {DATA.txtThayDoi}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center", paddingRight: 10 }}>
                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
              </View>

              <View style={{ alignItems: "center" }}>
                <Text numberOfLines={2}>{DATA.txtPttt}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* đặt đơn */}
      <View style={{ flex: 2 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
            width: "100%",
            borderTopColor: "#808080",
            borderTopWidth: 0.3,
            // position: "absolute",
            bottom: 0,
          }}
        >
          <View style={stylesOrder.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <View>
                <Text numberOfLines={1} style={{ color: "#808080" }}>
                  Tổng (tạm tính)
                </Text>
              </View>
              <View>
                <Text style={{ paddingRight: 10, fontWeight: "bold" }}>
                  {DATA.txtTong}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={stylesOrder.btnDatDon}>
              <Text style={stylesOrder.txtDatDon}>{DATA.txtDatDon}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
