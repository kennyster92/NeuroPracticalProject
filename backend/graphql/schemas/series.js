const { gql } = require('apollo-server-express');

module.exports = gql`

 type Series {
     idSeries: Int!
     seriesName: String!
     patients: [Patient!]
     studies: [Studies!]
     modality: [Modality!]
     createdDate: String
 }

 extend type Query {
     getAllPatients: [Patient!]
 }

`;