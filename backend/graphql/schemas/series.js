const { gql } = require('apollo-server-express');

module.exports = gql`

 type Series {
     id: Int!
     seriesName: String!
     patients: [Patient!]
     studies: [Studies!]
     modality: [Modality!]
     createdAt: String
 }

 extend type Query {
     getAllPatients: [Patient!]
 }

`;