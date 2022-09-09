import { StyleSheet } from 'react-native';

export default {
  row: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  }),
  column: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
  }),
};
