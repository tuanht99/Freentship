import { Text, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import React, { FC } from 'react';
import styles from '../themes/IconTextTheme';

interface Props {
  styleContainer?: object;
  styleText?: object;
  iconColor: string;
  sizeIcon: number;
  direction?: 'row' | 'column';
  title: string;
  nameIcon: string;
  numberOfLines?: number;
}

const IconText: FC<Props> = ({
  styleContainer,
  styleText,
  iconColor,
  sizeIcon,
  direction = 'column',
  title,
  nameIcon,
  numberOfLines = 1,
}) => {
  return (
    <View style={[styleContainer, styles[direction].container]}>
      <Ionicon name={nameIcon} size={sizeIcon} color={iconColor} />
      <Text numberOfLines={numberOfLines} style={[styleText, { flex: 1 }]}>{title}</Text>
    </View>
  );
};

export default IconText;
