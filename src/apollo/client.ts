import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api.abfree.com/v1/graphql',
  cache: new InMemoryCache(),
})
