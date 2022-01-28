import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Pokedex Screen"
                component={PokedexScreen}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
            <Stack.Screen name="Pokemon Screen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}