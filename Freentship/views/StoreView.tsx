import * as React from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import AppStyle from '../themes/IndexTheme';
import Longxaodua from '../assets/longxaodua.jpg';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';

export default function ComingSoon({ navigation }) {

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);

        // 👇️ or set to true
        // setIsActive(true);
    };

    const DATA = [{
        image: Longxaodua,
        name: 'Bún Đậu Mắm Tôm Nhà Thỏ - Long Bình',
        relationship: 'Đối tác lo ship',

    }];

    const DATAFOOD = [{
        id: 1,
        image: Longxaodua,
        name: 'Lòng xòa dưa',
        discription: 'Nhiều lòng ít dưa',
        price: '30.000',
        status: 'Đang mở cửa',
    },
    {
        id: 2,
        image: Longxaodua,
        name: 'Lòng xòa dưa',
        discription: 'Nhiều lòng ít dưa',
        price: '30.000',
        status: 'Đang mở cửa',
    },
    {
        id: 3,
        image: Longxaodua,
        name: 'Lòng xòa dưa',
        discription: 'Nhiều lòng ít dưa',
        price: '30.000',
        status: 'Đang mở cửa',
    },
    {
        id: 4,
        image: Longxaodua,
        name: 'Lòng xòa dưa',
        discription: 'Nhiều lòng ít dưa',
        price: '30.000',
        status: 'Đang mở cửa',
    },
    {
        id: 5,
        image: Longxaodua,
        name: 'Lòng xòa dưa',
        discription: 'Nhiều lòng ít dưa',
        price: '30.000',
        status: 'Đang mở cửa',
    }];

    const FOODCATEGORY = [{
        name: "Bình thường"
    },
    {
        name: "Bình thường"
    },
    {
        name: "Bình thường"
    },
    {
        name: "Bình thường"
    },
    {
        name: "Bình thường"
    }];

    const headerComponent = () => (

        <View>
            {DATA.map((data) => (
                <View>
                    <ImageBackground style={AppStyle.StoreTheme.imgFood} source={Longxaodua}>
                        <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.rightIcon]} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={21} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.heartIcon]}>
                            <AntDesign name="heart" size={21} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.srearchIcon]}>
                            <FontAwesome5 name="search" size={21} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[AppStyle.StoreTheme.iconCicle, AppStyle.StoreTheme.sharechIcon]}>
                            <FontAwesome5 name="external-link-alt" size={21} color="#000" />
                        </TouchableOpacity>
                    </ImageBackground>


                    <View style={{ flexDirection: 'row', backgroundColor: '#FF3333', justifyContent: 'center', borderRadius: 30, padding: 3, marginTop: 20, marginLeft: 20, maxWidth: 160 }}>
                        <FontAwesome5 name="star" size={18} color="#fff" />
                        <Text style={{ color: '#fff', marginLeft: 15 }}>{data.relationship}</Text>
                    </View>




                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                        {data.name}
                    </Text>

                    <View style={AppStyle.StoreTheme.btnCategory}>
                        <TouchableOpacity style={AppStyle.StoreTheme.category} >
                            <Text>Ăn sáng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.StoreTheme.category} >
                            <Text>Ăn trưa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.StoreTheme.category} >
                            <Text>Ăn tối</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                        <Octicons name="location" style={AppStyle.StoreTheme.loation} />
                        <Text style={{ minWidth:100 }}>3Km</Text>
                        <Text style={[AppStyle.InforUserTheme.orderStatusTrue, AppStyle.StoreTheme.ml15]}>Đang mở cửa</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 40,marginTop:5}}>
                            <Fontisto name="star" size={25} color="#FFCC00" style={{ marginRight: 5 }} />
                            <Text style={{ marginRight: 50, fontSize: 17 ,color:"#000", fontWeight: "bold", borderRadius: 10 , backgroundColor:'#FFFF99' }}> 4.1 <Text style={{color:"#666666",fontSize: 15}}>(15+)</Text></Text>
                            <TouchableOpacity  onPress={() => navigation.navigate('RatingView')}>
                            <Text style={{ color:'#0099FF',minWidth:100 }}>Xem thêm</Text>
                        </TouchableOpacity>
                        </View>
                       
                    <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <FontAwesome5 name="shipping-fast" size={24} color="black" style={{ marginRight: 20 }} />
                        <Text >FreeShip dưới 2km</Text>
                    </View>
                    <View style={[AppStyle.InforUserTheme.mr10, AppStyle.InforUserTheme.horizonline]} />
                </View>
            ))}
        </View>
    )


    const footerComponent = () => (
        <View>
            <FlatList
                horizontal
                data={FOODCATEGORY}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={handleClick} style={{
                        backgroundColor: isActive ? 'salmon' : '',
                        color: isActive ? 'white' : '',
                    }} >
                        <Text style={{ fontSize: 20, marginLeft: 20, textDecoration: 'underline' }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 10 }}>Bánh ướt ram giò</Text>

            <FlatList
                data={DATAFOOD} keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <TouchableOpacity style={AppStyle.InforUserTheme.htrOrder} onPress={() => navigation.navigate('Store')}>
                        <View style={{
                            flex: 2, justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Image style={{
                                height: 90, width: 90,
                                borderRadius: 15,
                                overflow: 'hidden',
                                resizeMode: 'contain',

                            }} source={item.image} />
                        </View>
                        <View style={{ flexDirection: 'column', flex: 4 }}>
                            <Text style={[AppStyle.InforUserTheme.bold, AppStyle.InforUserTheme.textSize17]}>
                                {item.name}
                            </Text>
                            <Text style={AppStyle.InforUserTheme.textGif}>
                                {item.discription}
                            </Text>
                            <Text style={{ fontSize: 13 }}>
                                {item.price}
                            </Text>

                        </View>
                    </TouchableOpacity>)}>

            </FlatList>
        </View>


    )

    return (
        <SafeAreaView style={AppStyle.StoreTheme.container}>
            <FlatList
                ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
            />
        </SafeAreaView>
    );
}