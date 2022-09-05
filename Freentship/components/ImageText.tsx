import { View, Text, Image } from 'react-native';
import React, { FC } from 'react';

interface Props {
  styleContainer?: object;
  styleImage: object;
  styleText?: object;
  sourceImage: string;
  title: string;
}

const ImageText: FC<Props> = ({ styleContainer, styleImage, styleText, sourceImage, title }) => {
  return (
    <View style={styleContainer}>
      <Image
        style={styleImage}
        source={{
          uri: sourceImage,
        }}
      />
      <Text style={styleText}>{title}</Text>
    </View>
  );
};

export default ImageText;
