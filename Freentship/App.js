import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import LoginNavigator from './navigators/LoginNavigator';
// import InforSettingView from './views/InforSettingView';
import NotifyView from './views/NotifyView';
import CartView from './views/CartView';
import OrderView from './views/OrderView';
import YourOrderView from './views/YourOrderView';
import OrderDeliveredView from './views/OrderDeliveredView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailOrderView from './views/DetailOrderView';
import OrderCanceledView from './views/OrderCanceledView';
import EditMenuView from './views/EditMenuView';
import AddCategoryFoodView from './views/AddCategoryFoodView';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EditMenuView" component={EditMenuView} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}
