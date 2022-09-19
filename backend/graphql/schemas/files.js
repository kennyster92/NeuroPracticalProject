const { gql } = require('apollo-server-express');

module.exports = gql`

 type Files {
     id: Int!
     filePath: String!
     series: [Series!]
     patient: [Patient!]
     studies: [Studies!]
     createdAt: String
 }

 extend type Query {
     getAllPatients: [Patient!]
 }

`;