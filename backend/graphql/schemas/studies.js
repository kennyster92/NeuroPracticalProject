const { gql } = require('apollo-server-express');

module.exports = gql`

 type Studies {
     idStudies: Int!
     studyName: String!
     patient: [Patient!]
     series: [Series!]
     files: [Files!]
     createdDate: String
 }

 extend type Query {
     getAllStudies: [Studies!]
 }

`;