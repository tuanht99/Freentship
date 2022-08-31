import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import InputPhoneNumScreen from '../views/InputPhoneNumView';
import InputPasswordView from '../views/InputPasswordView';
import OTPVerification from '../views/OTPVerificationView';

const Stack = createNativeStackNavigator();

export default function LoginNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InputPhoneNumScreen">
                <Stack.Screen name="InputPhoneNumScreen" options={{ headerShown: false }} component={InputPhoneNumScreen} tabBarVisible={false} />
                <Stack.Screen
                    name="OTPVerification"
                    component={OTPVerification}
                    options={{
                        title: 'Đăng ký tài khoản Freen’tship',
                        headerTitleStyle: {
                            fontSize: 15,
                        }
                    }}
                />
                <Stack.Screen
                    name="InputPasswordView"
                    component={InputPasswordView} tabBarVisible={false}
                    options={{
                        title: 'Đăng ký tài khoản Freen’tship',
                        headerTitleStyle: {
                            fontSize: 15,
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}