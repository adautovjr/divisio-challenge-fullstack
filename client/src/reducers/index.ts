import { combineReducers } from 'redux'
import pokemons from './pokemons'

const rootReducer = combineReducers({
  payload: pokemons
})

export default rootReducer
