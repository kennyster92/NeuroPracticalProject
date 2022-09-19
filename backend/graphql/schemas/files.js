const { gql } = require('apollo-server-express');

module.exports = gql`

 type Files {
     idFiles: Int!
     filePath: String!
     series: [Series!]
     patient: [Patient!]
     studies: [Studies!]
     createdDate: String
 }

 extend type Query {
     getAllPatients: [Patient!]
 }

`;