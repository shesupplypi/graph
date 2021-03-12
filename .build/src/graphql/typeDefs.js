"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
// Construct a schema, using GraphQL schema language
const typeDefs = apollo_server_lambda_1.gql `
   type Order {
      id: String!
      customerName: String!
      deliveryAddress: String!
      quantity: Int!
   }

   type Query {
      order(id: String!): Order
   }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map