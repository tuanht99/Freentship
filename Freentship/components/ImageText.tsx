import { View, Text, Image } from 'react-native';
import React, { FC } from 'react';
import styles from '../themes/ImageTextTheme';

interface Props {
  styleContainer?: object;
  styleImage: object;
  styleText?: object;
  sourceImage: string;
  title: string;
  numberOfLines?: number;
}

const ImageText: FC<Props> = ({ numberOfLines, styleContainer, styleImage, styleText, sourceImage, title }) => {
  return (
    <View style={styleContainer}>
      <Image
        style={styleImage}
        source={{
          uri: sourceImage,
        }}
      />
      <Text numberOfLines={numberOfLines} style={[styleText, styles.title]}>{title}</Text>
    </View>
  );
};

export default ImageText;
