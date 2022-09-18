const { gql } = require('apollo-server-express');

module.exports = gql`

 type Patient {
     idPatient: Int!
     name: String!
     series: [Series!]
     files: [Files!]
     createdDate: String
 }

 extend type Query {
     getAllPatients: [Patient!]
 }

`;