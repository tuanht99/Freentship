import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginNavigator from './navigators/LoginNavigator';

import RootNavigator from './navigators/RootNavigator';

export default function App() {
  return (
    < RootNavigator />
  );
}
