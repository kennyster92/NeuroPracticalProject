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

 extend type Mutation {
     createPatient(name: String!): PatientResponse
     updatePatient(id: Int!, name: String!): PatientResponse
     deletePatient(id: Int!): PatientResponse
 }

 type PatientResponse {
     id: Int!
     name: String!
     createdAt: String!
 }
`;