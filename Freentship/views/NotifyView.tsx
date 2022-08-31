import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, } from 'react-native'
import React from 'react'

import AppStyle from '../themes/NotifyTheme'
import { Ionicons } from '@expo/vector-icons';


export default function NotifyView() {
  return (
    <View style={AppStyle.view}>

      <View style={AppStyle.viewhead} >
        <Image style={AppStyle.image} source={require('../assets/logo.jpg')}></Image>
        <TouchableOpacity style={AppStyle.Menu}>
        <Ionicons  name="menu-outline" size={50} color="black" /> 
        </TouchableOpacity>
      </View>


      <View style={AppStyle.viewScroll}>

        <ScrollView style={AppStyle.scrollView}>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={AppStyle.touch}>
            <Text style={AppStyle.text}>
              bạn có voucher giảm giá 82%
            </Text>
          </TouchableOpacity>
     
        </ScrollView>
      </View>

      
    </View>
  );
}





