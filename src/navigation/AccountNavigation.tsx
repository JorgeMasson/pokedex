import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Account Screen"
                component={AccountScreen}
            />
        </Stack.Navigator>
    );
}