import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/interfaces';
import { AppThunkDispatch } from './store/interfaces/appThunkDispatch';
import { getPokemons, pokemonState } from './store/slices/pokemon';


export const PokemonApp = () => {

    const { value: { page, pokemons, isLoading }} = useSelector<RootState, pokemonState>(({pokemons}) => {
        return pokemons 
    });
      
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);


    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: { isLoading ? 'True': 'False' }</span>
            <ul>
                { pokemons.map(({name}) => {
                    return <li key={name}>{name}</li>
                }) }
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </button>
        </>
    )
}
