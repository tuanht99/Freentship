import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginNavigator from './navigators/LoginNavigator';

import RootNavigator from './navigators/RootNavigator';
import OrderHistory from './views/OrderHistoryView';

export default function App() {
  return (
    < OrderHistory />
  );
}
