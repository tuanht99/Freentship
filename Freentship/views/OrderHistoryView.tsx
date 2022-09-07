import { View, Text, ScrollView, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { AntDesign } from '@expo/vector-icons';
import Styles from '../themes/OrderHistoryTheme';
import AppStyle from '../themes/IndexTheme';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Longxaodua from '../assets/longxaodua.jpg';

const OrderHistory = () => {

  const DATA: any = {
    image: Longxaodua,
  }
  let str = '49 chuong duong , Linh chieu Quan thu Duc'


  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView >
        <View style={Styles.title}>
          <AntDesign name="checkcircle" size={30} style={Styles.titleIcon} />
          <Text style={Styles.titleText}>DA DEN TAY NGUOI NHAN</Text>
          <View>
            <Text style={Styles.titleContent}>Cảm ơn bạn <Text style={{ fontWeight: 'bold' }}>Trần Quốc Huy</Text> đã cho Freen't Ship có cơ hội được phục vụ</Text>
            <Text style={Styles.titleContent}>Loship biết bạn có nhiều sự lựa chọn cảm ơn vì đã chọn Loship ngày hôm nay</Text>
          </View>
        </View>
        <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />

        <View style={Styles.itemContainer}>
          <View style={Styles.itemInfo}>
            <Text style={Styles.storeName}>Tra sua nha HYY</Text>
            <Text style={Styles.address}>{str.substring(0, 38) + "..."}</Text>
            <TouchableWithoutFeedback >
              <Text style={Styles.comment}>Chia se cam nhan</Text>
            </TouchableWithoutFeedback>
          </View >
          <Image style={Styles.imageItem} source={Longxaodua}></Image>
        </View>
        <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />

        <View style={Styles.itemContainer}>
          <View style={Styles.itemInfo}>
            <Text style={Styles.storeName}>Tran Hoang Quoc Khanh</Text>
            <Text style={Styles.address}>66M1-178.09 + HONDA-AIRBLADE</Text>

          </View >
          <Image style={Styles.imageShipper} source={Longxaodua}></Image>

          <View style={Styles.shipperRating}>
            <AntDesign name="smile-circle" size={15} color="#FF6600" />
            <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>100%</Text>
          </View>
        </View>
        <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />

        <View style={Styles.mr10}>
          <Text style={Styles.orderCode}>Mã đơn : adsdsdscsa</Text>

          <View style={{ flexDirection: 'row' }}>
            <Fontisto name="shopping-store" size={24} color="#FF0000" style={{ marginRight: 10 }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={Styles.address}>Nơi mua hàng</Text>

              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Tra sua nha HYY</Text>
                <MaterialIcons name="chevron-right" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Fontisto name="shopping-store" size={24} color="#FF0000" style={{ marginRight: 10 }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={Styles.address}>Nơi giao hàng</Text>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>13/21 xa dssv  asddsdsadasd </Text>
            </View>
          </View>

          <View style={Styles.line}></View>

          <View>
            <Text>2 món |<Text> Trà sữa abc , Trà xửa xyz cdjsjdkasđasdasdsđah...</Text> </Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
              <Text style={Styles.textBold}>Tổng</Text>
              <Text style={Styles.textBold}>42.000 đ</Text>
            </View>
          </View>
        </View>
        <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />
        <View style={Styles.mr10}>
          <Text style={Styles.textBold}>
            Liên hệ - CSKH LOSHIP
          </Text>
          <Text>
            Loship sẵn sàng hỗ trợ trong trường hợp của quý khách gặp sự cố với đơn hàng
          </Text>
          <Text>
            Hotline: <Text style={Styles.textBold}>45454321213</Text>
          </Text>
          <Text>
            Email:<Text style={Styles.textBold}>45454321213</Text>
          </Text>
          <Text>
            FaceBook:<Text style={Styles.textBold}>45454321213</Text>
          </Text>
        </View>

      </ScrollView>
      <View style={Styles.reOrderContainer}>
        <TouchableOpacity style={Styles.order}>
          <AntDesign name="reload1" size={16} color="#fff" />
          <Text style={{ color: "#FFFFFF", fontSize: 15, marginLeft: 5, }}>Đặt lại</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default OrderHistory