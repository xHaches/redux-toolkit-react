import { CounterState } from "../slices/counter";
import { pokemonState } from "../slices/pokemon";

export interface RootState {
    counter: CounterState,
    pokemons: pokemonState
}
