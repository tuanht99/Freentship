import { Image, View } from 'react-native';
import IconText from './IconText';
import ImageText from './ImageText';
import React, { FC } from 'react';
import styles from '../themes/ProductTheme';

interface Props {
  sourceImage: string;
  title: string;
  distance: number;
  discount: number;
}

const Product: FC<Props> = ({ sourceImage, title, distance, discount }) => {
  return (
    <View style={styles.product}>
      <ImageText
        styleImage={styles.product_image}
        styleText={styles.product_title}
        sourceImage={sourceImage}
        title={title}
      />
      <View style={styles.product_advertisement}>
        <Image source={require('../assets/qc.png')} style={styles.advertisement_image} />
        <IconText
          direction="row"
          iconColor={styles.advertisement_icon.color}
          sizeIcon={styles.advertisement_icon.fontSize}
          styleText={styles.advertisement_title}
          title={distance + ' km'}
          nameIcon={'location-outline'}
        />
      </View>
      <IconText
        direction="row"
        iconColor={styles.advertisement_icon.color}
        sizeIcon={styles.advertisement_icon.fontSize}
        styleText={styles.advertisement_title}
        styleContainer={styles.advertisement_discount}
        title={'Giảm ' + discount + '%'}
        nameIcon={'md-pricetag-outline'}
      />
    </View>
  );
};

export default Product;
