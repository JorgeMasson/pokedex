import { POKEMON_TYPE_COLORS } from './constants'

type colorOptions = {
    [key: string]: boolean
}

const getColorByPokemonType = (type: any) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;