import {
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from '../themes/HomeTheme';
import IconText from '../components/IconText';
import ImageText from '../components/ImageText';
import Category1 from '../components/Category1';
import { DataCategory, DataCategory1, DataCategory2, DataCategory3 } from '../core/data';
import Category2 from '../components/Category2';
import { db } from '../core/config';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

export interface ProductModel {
  id: string;
  sourceImage: string;
  title: string;
  distance: number;
  discount: number;
}

export interface CategoryIconText {
  nameIcon: string;
  title: string;
}

const HomeView = () => {
  const [data, setData] = useState<ProductModel[]>([]);
  useEffect(() => {
    let unsubscribe: any;
    const fetchData = async () => {
      // unsubscribe = onSnapshot(collection(db, 'items'), (querySnapshot) => {
      //   setData(
      //     querySnapshot.docs.map((doc) => ({
      //       id: doc.id,
      //       ...doc.data(),
      //     })) as ProductModel[]
      //   );
      // });
      unsubscribe = await getDocs(collection(db, 'items')).then((querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as ProductModel[]
        );
      });
    };

    fetchData();
    return unsubscribe;
  }, []);

  const [txtAddress] = useState('53 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh');
  const txtCategory = ['thử quán mới', 'đang khuyến mãi', 'thương hiệu quen thuộc'];
  const [isScroll, setIsCroll] = useState<boolean>(false);
  const [urlImage] = useState<string>(
    'https://loship.vn/dist/images/home-banner-18062021.jpg'
  );
  const [urlAvarta] = useState<string>(
    'https://anhdepfree.com/wp-content/uploads/2020/06/icon-facebook.png'
  );
  const [avartaTitle] = useState<string>('Chào buổi tối, Khanh');
  const [dataCategory] = useState<CategoryIconText[]>(DataCategory);
  const [dataCategory1] = useState<CategoryIconText[]>(DataCategory1);
  const [dataCategory2] = useState<CategoryIconText[]>(DataCategory2);
  const [dataCategory3] = useState<CategoryIconText[]>(DataCategory3);

  if (dataCategory3.length < 4) {
    for (let i = 0; i < 5 - dataCategory3.length; i++) {
      dataCategory3.push({ nameIcon: '', title: '' });
    }
  }

  function handleSroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY >= 125) {
      setIsCroll(true);
    } else {
      setIsCroll(false);
    }
    console.log(event.nativeEvent.contentOffset.y);
  }

  return (
    <SafeAreaView style={styles.container}>
      {isScroll && (
        <View style={styles.logoFixed}>
          <Text style={styles.logoTextFixed}>test</Text>
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} onScroll={handleSroll}>
        <ImageBackground source={{ uri: urlImage }} style={styles.image}>
          <View style={styles.location}>
            <IconText
              iconColor={styles.iconStyle.color}
              sizeIcon={styles.iconStyle.size}
              direction="row"
              title={txtAddress}
              nameIcon="location-sharp"
              styleText={styles.title}
            />
            <Ionicon
              name="chevron-forward"
              size={styles.iconStyle.size}
              color={styles.iconStyle.color}
            />
          </View>
        </ImageBackground>
        <View style={styles.logo}>
          <Text style={styles.logoText}>test</Text>
        </View>
        <View style={styles.category}>
          <ImageText
            sourceImage={urlAvarta}
            title={avartaTitle}
            styleImage={styles.imageAvarta}
            styleContainer={styles.avartaContainer}
            styleText={styles.avartaText}
          />
          <Category1
            iconColor={styles.categoryIcon.color}
            sizeIcon={styles.categoryIcon.size}
            styleText={styles.categoryText}
            styleContainer={styles.categoryList}
            data={dataCategory}
          />
          <Category1
            iconColor={styles.categoryIcon.color}
            sizeIcon={styles.categoryIcon.size}
            styleText={styles.categoryText}
            styleContainer={styles.categoryList}
            data={dataCategory1}
          />
          <Category1
            iconColor={styles.categoryIcon.color}
            sizeIcon={styles.categoryIcon.size}
            styleText={styles.categoryText}
            styleContainer={styles.categoryList}
            data={dataCategory2}
          />
          <Category1
            iconColor={styles.categoryIcon.color}
            sizeIcon={styles.categoryIcon.size}
            styleText={styles.categoryText}
            styleContainer={styles.categoryList}
            data={dataCategory3}
          />
        </View>
        <Category2 data={data} title={txtCategory[0]} />
        <Category2 data={data} title={txtCategory[1]} />
        <Category2 data={data} title={txtCategory[2]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;
