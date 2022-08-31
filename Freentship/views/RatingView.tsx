import * as React from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import AppStyle from '../themes/IndexTheme';
import Longxaodua from '../assets/longxaodua.jpg';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get("window").width;

const COMMENT = [{
    name: 'Tran Huy',
    cmtDate: '3 ngay truoc',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Hài lòng',

},
{
    name: 'Tran Huy',
    cmtDate: '3 ngay truoc',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Hài lòng',

}
,{
    name: 'Tran Huy',
    cmtDate: '3 ngay truoc',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Hài lòng',

},{
    name: 'Tran Huy',
    cmtDate: '3 ngay truoc',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Hài lòng',

}
,{
    name: 'Tran Huy',
    cmtDate: '3 ngay truoc',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Hài lòng',

},{
    name: 'Tran Huy',
    cmtDate: '3 ngay truoc',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Hài lòng',

}]

export default function App() {

    const StoreName = () => (
        <View>
           
            <Text style={AppStyle.InforUserTheme.htrOrderText} >Bún Đậu Mắm Tôm Nhà Thỏ - Long Bình</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Fontisto name="star" size={25} color="#FFCC00" style={{ marginRight: 5 }} />
                <Text style={{ marginRight: 50, fontSize: 17, color: "#000", fontWeight: "bold", borderRadius: 10, backgroundColor: '#FFFF99' }}> 4.1 <Text style={{ color: "#666666", fontSize: 15 }}>(15+)</Text></Text>
            </View>
            <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />
        </View>
    )

    const CommentComponent = () => (
        <FlatList
            data={COMMENT}
            renderItem={({ item }) => (
                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Longxaodua} style={{ borderRadius: 50, width: 40, height: 40, marginRight: 10 }} />
                            <View >
                                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, color: '#777777' }}>{item.cmtDate}</Text>
                            </View>

                        </View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00CC33' }}>{item.status}</Text>
                    </View>

                    <Text style={{ fontSize: 14, marginLeft: 30, marginTop: 10 }}>
                        {item.content}
                    </Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                        <AntDesign name="like2" size={24} color="black" />
                        <Text> Bo ich <>(10)</></Text>
                    </TouchableOpacity>

                    <View style={{ height: 0.8, maxWidth: windowWidth - 10, backgroundColor: '#000000', marginTop: 5, }}></View>
                </View>
            )} />

    )

    return (
        <SafeAreaView style={AppStyle.StoreTheme.container}>

            <FlatList
                ListHeaderComponent={StoreName}
                ListFooterComponent={CommentComponent} />
        </SafeAreaView>
    );
}