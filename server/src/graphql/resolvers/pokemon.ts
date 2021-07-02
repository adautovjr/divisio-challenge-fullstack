import { mockPokemons } from '../../mocks/pokemons'

export default {
  Query: {
    pokemons: (_, __, { dataSources }) => {
      return dataSources.pokemonAPI.fetchPokemons()
    },
    pokemon(_, { name }, { dataSources }) {
      return dataSources.pokemonAPI.fetchPokemon(name)
    }
  }
}
