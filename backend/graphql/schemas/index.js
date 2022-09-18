const { gql } = require('apollo-server-express');
const patientType = require('./patient');
const studiesType = require('./studies');

const rootType = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

module.exports = [rootType, patientType, studiesType];
