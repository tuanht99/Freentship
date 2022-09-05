import { View } from 'react-native';
import React, { FC } from 'react';
import IconText from './IconText';
import { CategoryIconText } from '../views/HomeView';
import styles from '../themes/Category1Theme';

interface Props {
  iconColor: string;
  sizeIcon: number;
  styleText?: object;
  styleContainer?: object;
  data: CategoryIconText[];
}

const Category1: FC<Props> = ({ iconColor, sizeIcon, styleText, styleContainer, data }) => {
  return (
    <View style={styleContainer}>
      {data.map((item, index) => {
        return (
          <IconText
            iconColor={iconColor}
            sizeIcon={sizeIcon}
            title={item.title}
            nameIcon={item.nameIcon}
            styleText={styleText}
            styleContainer={styles.container}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default Category1;
