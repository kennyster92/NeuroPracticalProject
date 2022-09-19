const { gql } = require('apollo-server-express');

module.exports = gql`

 type Studies {
     id: Int!
     studyName: String!
     patient: [Patient!]
     series: [Series!]
     files: [Files!]
     createdAt: String
 }

 extend type Query {
     getAllStudies: [Studies!]
 }

`;