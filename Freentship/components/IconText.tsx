import { Text, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import React, { FC, useEffect, useState } from 'react';
import styles from '../themes/IconTextTheme';

interface Props {
  styleContainer?: object;
  styleText?: object;
  iconColor: string;
  sizeIcon: number;
  direction?: 'row' | 'column';
  title: string;
  nameIcon: string;
}

const IconText: FC<Props> = ({
  styleContainer,
  styleText,
  iconColor,
  sizeIcon,
  direction = 'column',
  title,
  nameIcon,
}) => {
  const [classContainer, setClassContainer] = useState<object>(styles[direction].container);
  useEffect(() => {
    if (styleContainer) {
      setClassContainer({ ...classContainer, ...styleContainer });
    }
  }, [styleContainer]);

  return (
    <View style={classContainer}>
      <Ionicon name={nameIcon} size={sizeIcon} color={iconColor} />
      <Text style={styleText}>{title}</Text>
    </View>
  );
};

export default IconText;
