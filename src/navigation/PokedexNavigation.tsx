import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerTransparent: true }}>
            <Stack.Screen
                name="Pokedex Screen"
                component={PokedexScreen}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Pokemon"
                component={PokemonScreen}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: true,
                    headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
    );
}
