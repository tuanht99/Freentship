import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Logo from '../assets/favicon.png';
import Avatar from '../assets/longxaodua.jpg';
import Longxaodua from '../assets/longxaodua.jpg';
import Gif from '../assets/gif.jpg';

import AppStyle from '../theme/StyleInforUser';




export default function BooksListApp({ navigation }) {

  const supportList = [{
    icon1: 'smile',
    content: 'Cộng đồng lo ship',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'heart',
    content: 'Cửa hàng yêu thích',
    icon2: 'right',
    navigation: 'FavoriteStore'
  },
  {
    icon1: 'credit-card',
    content: 'Quản lý thanh toán',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'question',
    content: 'Câu hỏi thường gặp',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'facebook-messenger',
    content: 'Đề xuất mong muốn',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'telegram-plane',
    content: 'Đóng góp tính năng loship',
    icon2: 'right',
    navigation: 'ComingSoon'
  },
  {
    icon1: 'phone',
    content: 'Liên hệ với loship',
    icon2: 'right',
    navigation: 'ComingSoon'
  },

  ];

  return (
    <SafeAreaView style={AppStyle.container}>
      <StatusBar backgroundColor='#EEEEEE' />
      <View style={AppStyle.info}>

        {/* <View >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ marginLeft: 15 }} source={Logo} />

            <MaterialCommunityIcons style={{ fontSize: 40, marginRight: 15 }} name="menu"/>
          </View>
        </View> */}

        <View>
          <ScrollView style={AppStyle.scollview}>

            <View style={AppStyle.fdRow}>
              <View style={{flex: 2,justifyContent: 'center',alignItems: 'center'}}>
                <Image style={AppStyle.imgUser} source={Avatar} />
              </View>

              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={{ fontSize: 16 }}>
                  Nguyễn Văn Mười
                </Text>
                <Text style={{ color: '#FF00FF', fontSize: 15 }}>
                  0966.533.699
                </Text>
                <TouchableOpacity style={{}}>
                  <Text style={{
                    fontSize: 18, fontStyle: 'italic', textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 20,
                  }}>Cập nhật hồ sơ</Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={[AppStyle.mr10, AppStyle.horizonline]} />

            <View style={AppStyle.fdRow}>
              <Image style={AppStyle.imgGif} source={Gif} />

              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={[AppStyle.bold, AppStyle.italic]}>
                  Giới thiệu freen't ship với bạn bè
                </Text>
                <Text style={[AppStyle.italic, AppStyle.textGif]}>
                  Nhận ngay phần thưởng hấp dẫn
                </Text>
              </View>
              <AntDesign name="right" style={AppStyle.rightIcon} />
            </View>

            <View style={[AppStyle.mr10, AppStyle.horizonline]} />
            {supportList.map((support) => (
              <TouchableOpacity style={AppStyle.supportLoShip} onPress={() => navigation.navigate(support.navigation)}>
                <View>
                  <FontAwesome5 name={support.icon1} style={AppStyle.icon} />
                </View>
                <View style={{ flexDirection: 'row', flex: 4, }} >
                  <Text style={{ fontSize: 15 }}>
                    {support.content}
                  </Text>
                </View>
                <AntDesign name={support.icon2} style={AppStyle.rightIcon} />
              </TouchableOpacity>
            ))}

            <View style={[AppStyle.mr10, AppStyle.horizonline]} />

            <View style={AppStyle.supportLoShip}>
              <MaterialCommunityIcons name="tray-arrow-up" style={AppStyle.icon} />
              <View style={{ flexDirection: 'row', flex: 4, }} >
                <Text style={AppStyle.textVersion}>
                  Phiên bản hiện tại 2.21.201
                </Text>
              </View>

            </View>

            <View style={[AppStyle.mr10, AppStyle.horizonline]} />


            <Text style={AppStyle.htrOrderText}>Lịch sử đơn hàng</Text>
            <View style={AppStyle.htrOrder}>
              <View style={{
                flex: 2, justifyContent: "center",
                alignItems: "center",
              }}>
                <Image style={{
                  height: 90, width: 90,
                  borderRadius: 15,
                  overflow: 'hidden',
                  resizeMode: 'contain',

                }} source={Longxaodua} />
              </View>
              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={[AppStyle.bold, AppStyle.textSize17]}>
                  Lòng xào dưa
                </Text>
                <Text style={AppStyle.textGif}>
                  Nhiều lòng ít dưa
                </Text>
                <Text style={{ fontSize: 13 }}>
                  Tổng tiền : 30.000 đ
                </Text>
                <Text style={AppStyle.orderStatusTrue}>
                  Đã giao
                </Text>
              </View>
            </View>

            <View style={AppStyle.htrOrder}>
              <View style={{
                flex: 2, justifyContent: "center",
                alignItems: "center",
              }}>
                <Image style={{
                  height: 90, width: 90,
                  borderRadius: 15,
                  overflow: 'hidden',
                  resizeMode: 'contain',

                }} source={Longxaodua} />
              </View>
              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={[AppStyle.bold, AppStyle.textSize17]}>
                  Lòng xào dưa
                </Text>
                <Text style={AppStyle.textGif}>
                  Nhiều lòng ít dưa
                </Text>
                <Text style={{ fontSize: 13 }}>
                  Tổng tiền : 30.000 đ
                </Text>
                <Text style={AppStyle.orderStatusTrue}>
                  Đã giao
                </Text>
              </View>
            </View>

            <View style={AppStyle.htrOrder}>
              <View style={{
                flex: 2, justifyContent: "center",
                alignItems: "center",
              }}>
                <Image style={{
                  height: 90, width: 90,
                  borderRadius: 15,
                  overflow: 'hidden',
                  resizeMode: 'contain',

                }} source={Longxaodua} />
              </View>


              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={[AppStyle.bold, AppStyle.textSize17]}>
                  Lòng xào dưa
                </Text>
                <Text style={AppStyle.textGif}>
                  Nhiều lòng ít dưa
                </Text>
                <Text style={{ fontSize: 13 }}>
                  Tổng tiền : 30.000 đ
                </Text>
                <Text style={AppStyle.orderStatusFalse}>
                  Đã hủy
                </Text>
              </View>
            </View>

            <View style={AppStyle.htrOrder}>
              <View style={{
                flex: 2, justifyContent: "center",
                alignItems: "center",
              }}>
                <Image style={{
                  height: 90, width: 90,
                  borderRadius: 15,
                  overflow: 'hidden',
                  resizeMode: 'contain',

                }} source={Longxaodua} />
              </View>
              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={[AppStyle.bold, AppStyle.textSize17]}>
                  Lòng xào dưa
                </Text>
                <Text style={AppStyle.textGif}>
                  Nhiều lòng ít dưa
                </Text>
                <Text style={{ fontSize: 13 }}>
                  Tổng tiền : 30.000 đ
                </Text>
                <Text style={AppStyle.orderStatusFalse}>
                  Đã hủy
                </Text>
              </View>
            </View>

          </ScrollView>
        </View>


      </View>

    </SafeAreaView>
  );
}
