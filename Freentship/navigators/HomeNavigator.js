import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../views/HomeView';

const HomeTab = createBottomTabNavigator();

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function HomeNavigator() {
  return (
    <HomeTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <HomeTab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}