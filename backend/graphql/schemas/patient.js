const { gql } = require('apollo-server-express');

module.exports = gql`

 type Patient {
     id: Int!
     name: String!
     series: [Series!]
     files: [Files!]
     createdAt: String
 }

 extend type Query {
     getAllPatients: [Patient!]
 }

`;