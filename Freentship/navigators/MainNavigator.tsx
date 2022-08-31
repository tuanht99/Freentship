import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../views/HomeView';
import FoodView from '../views/FoodView';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Mai;" component={HomeView} />
        <Stack.Screen name="Food" component={FoodView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}