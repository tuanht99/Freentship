// Import mock screens
import Infor from '../views/InforView';
import FavoriteStore from '../views/FavoriteStoreView';
import ComingSoon from '../views/ComingSoonView';
import Store from '../views/StoreView';
// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Thong tin TK">
        <Stack.Screen name="Thong tin TK" component={Infor} />
        <Stack.Screen name="FavoriteStore" component={FavoriteStore} />
        <Stack.Screen name="ComingSoon" component={ComingSoon} />

        <Stack.Screen name="Store" options={{
          // hidden navbar
          headerShown: false,
        }} component={Store} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

