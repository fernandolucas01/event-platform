import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ovo6c312i901xn2s46a83v/master',
  cache: new InMemoryCache()
})
