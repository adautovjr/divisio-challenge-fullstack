import { gql } from 'apollo-server-express'

export default gql`
  type Pokemon {
    id: ID
    name: String!
    sprites: PokemonSprites!
  }

  type PokemonSprites {
    front_default: String
    front_shiny: String
    front_female: String
    front_shiny_female: String
    back_default: String
    back_shiny: String
    back_female: String
    back_shiny_female: String
  }

  type Query {
    pokemons: [Pokemon!]!
    pokemon(name: String!): Pokemon
  }
`
