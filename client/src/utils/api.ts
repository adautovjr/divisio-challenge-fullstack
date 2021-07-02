import client from '../config/apollo-client'
import {
  FETCH_POKEMON_QUERY,
  FETCH_POKEMON_BY_NAME_QUERY
} from '../queries/pokemon'

export async function fetchPokemonsFromAPI() {
  const response = await client.query({
    query: FETCH_POKEMON_QUERY
  })
  return response
}

export async function fetchPokemonDataFromAPI(pokemon: string) {
  const response = await client.query({
    query: FETCH_POKEMON_BY_NAME_QUERY,
    variables: {
      name: pokemon
    }
  })
  return response
}
