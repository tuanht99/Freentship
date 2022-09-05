import { StyleSheet } from 'react-native';
import Colors from './colors';

export default {
  row: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row-reverse',
      backgroundColor: Colors.lightGrey,
    },
  }),
};
