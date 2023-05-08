import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../interfaces'
import { pokemon } from './interfaces/pokemon'

export interface pokemonState {
    value: {
        page: number,
        pokemons: pokemon[],
        isLoading: boolean
    }
}
const initialState: pokemonState = {
    value: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
}
export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.value.isLoading = true;
        },
        setPokemons: (state, action: PayloadAction<any>) => {
            state.value.isLoading = false;
            state.value.page = action.payload.page;
            state.value.pokemons = action.payload.pokemons;
        }
    },
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
export const selectPokemon = (state: RootState) => state.pokemons.value;