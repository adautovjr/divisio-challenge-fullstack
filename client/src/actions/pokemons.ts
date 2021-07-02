import { fetchPokemonDataFromAPI } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POKEMONS = '@pokemons/RECEIVE_POKEMONS'
export const SET_ACTIVE_POKEMON = '@pokemons/SET_ACTIVE_POKEMON'

export function receivePokemons(pokemons: any) {
  return {
    type: RECEIVE_POKEMONS,
    pokemons
  }
}

export function setActivePokemon(result: any) {
  return {
    type: SET_ACTIVE_POKEMON,
    payload: result ? result.data : null
  }
}

export function getDataFor(pokemon: string) {
  return (dispatch: any) => {
    dispatch(showLoading())
    return fetchPokemonDataFromAPI(pokemon).then((result) => {
      dispatch(setActivePokemon(result))
      dispatch(hideLoading())
      return result
    })
  }
}
