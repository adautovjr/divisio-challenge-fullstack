import { RECEIVE_POKEMONS, SET_ACTIVE_POKEMON } from '../actions/pokemons'

const INITIAL_STATE = {
  pokemons: [],
  activePokemon: null
}

export default function pokemons(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return {
        pokemons: action.pokemons,
        activePokemon: null
      }
    case SET_ACTIVE_POKEMON:
      return {
        pokemons: state.pokemons,
        activePokemon: action.payload ? action.payload.pokemon : null
      }
    default:
      return state
  }
}
