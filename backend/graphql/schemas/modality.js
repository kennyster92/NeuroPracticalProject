const { gql } = require('apollo-server-express');

module.exports = gql`

 type Modality {
     idModality: Int!
     name: String!
 }

`;