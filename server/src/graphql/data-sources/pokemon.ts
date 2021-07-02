import { RESTDataSource } from 'apollo-datasource-rest'

export class PokemonDataSource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async fetchPokemons(limit?: number, offset?: number) {
    const results = await this.get('pokemon?limit=10')
    console.log(results)
    return results.results
  }

  async fetchPokemon(name: String) {
    const results = await this.get(`pokemon/${name}`)
    console.log(results)
    return results
  }
}
