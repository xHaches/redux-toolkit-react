import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0): any => {
    return async (dispatch: (reducer: any, action?: any) => void, getState: any) => {
        dispatch(startLoadingPokemons());

        const { data: { results }} = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        
        dispatch(setPokemons({pokemons: results, page: page + 1}));
        
    }
}
