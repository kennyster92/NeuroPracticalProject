const { gql } = require('apollo-server-express');

module.exports = gql`

 type Modality {
     id: Int!
     name: String!
 }

`;