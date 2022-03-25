import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
    const [pokemons, setPokemons]: any = useState([]);
    const [nextUrl, setNextUrl] = useState('');

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextUrl);
            setNextUrl(response.next);

            const pokemonsArray: any = [];

            for await (const pokemon of response.results) {
                const pokemonDetalis = await getPokemonDetailsByUrlApi(pokemon.url);

                pokemonsArray.push({
                    id: pokemonDetalis.id,
                    name: pokemonDetalis.name,
                    type: pokemonDetalis.types[0].type.name,
                    order: pokemonDetalis.order,
                    image: pokemonDetalis.sprites.other['official-artwork'].front_default,
                });
            }

            setPokemons([...pokemons, ...pokemonsArray]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <PokemonList
                pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={nextUrl}
            />
        </SafeAreaView>
    );
}
