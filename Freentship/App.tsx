import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import LoginNavigator from './navigators/LoginNavigator';
// import InforSettingView from './views/InforSettingView';
import NotifyView from './views/NotifyView';
import DetailsScreenView from './views/DetailsScreenView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DetailsScreenView" component={DetailsScreenView} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}
