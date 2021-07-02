import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

import resolvers from '../graphql/resolvers'
import typeDefs from '../graphql/type-defs'
import { PokemonDataSource } from "../graphql/data-sources/pokemon"

export const setupApolloServer = (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => ({
      pokemonAPI: new PokemonDataSource() 
    }),
    playground: true,
    introspection: true
  })

  server.applyMiddleware({ app })
}
