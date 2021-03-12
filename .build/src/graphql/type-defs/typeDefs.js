"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
// Construct a schema, using GraphQL schema language
const typeDefs = apollo_server_lambda_1.gql `
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
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map