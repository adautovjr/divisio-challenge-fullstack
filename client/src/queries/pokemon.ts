import gql from 'graphql-tag'

export const FETCH_POKEMON_QUERY = gql`
  query {
    pokemons {
      name
    }
  }
`

export const FETCH_POKEMON_BY_NAME_QUERY = gql`
  query FETCH_POKEMON_BY_NAME_QUERY($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
        back_default
      }
    }
  }
`
