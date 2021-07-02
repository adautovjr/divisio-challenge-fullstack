import { showLoading, hideLoading } from 'react-redux-loading'
import { fetchPokemonsFromAPI } from '../utils/api'
import { receivePokemons } from './pokemons'

export function handleInitialData() {
  return (dispatch: any) => {
    dispatch(showLoading())
    return fetchPokemonsFromAPI().then(({ data }: any) => {
      dispatch(receivePokemons(data.pokemons))
      dispatch(hideLoading())
    })
  }
}
