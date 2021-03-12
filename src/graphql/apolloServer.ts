import { ApolloServer, IResolvers } from 'apollo-server-lambda'
import * as queries from './resolvers/queries'
import typeDefs from './type-defs/typeDefs'

const NODE_ENV = process.env.NODE_ENV

const IS_DEV = !NODE_ENV || !['production'].includes(NODE_ENV)

const resolvers = {
   Query: queries,
} as IResolvers

const apolloServer = new ApolloServer({
   typeDefs,
   resolvers,
   // subscriptions: {},
   introspection: IS_DEV,
   // context: {},
})

export default apolloServer.createHandler()
