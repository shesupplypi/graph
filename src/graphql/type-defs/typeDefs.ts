import { gql } from 'apollo-server-lambda'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
   type Product {
      id: String!
      name: String!
      price: String!
   }

   type Order {
      id: String!
      customerName: String!
      deliveryAddress: String!
      product: Product!
      quantity: Int!
   }

   type Query {
      getProduct(id: String!): Product
      getOrder(id: String!): Order
      getOne: [Order]
   }
`

export default typeDefs
