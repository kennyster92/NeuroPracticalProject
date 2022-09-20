// import {graphqlHTTP} from 'express-graphql'

const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = require('../graphql/schemas');
const resolvers = require('../graphql/resolvers');
const context = require('../graphql/context');

const port = process.env.PORT || 3301;

const app = express();

app.use(cors());

async function startExpressApolloServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
      },
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/api' });
  
  const server = createServer(app);
  
  server.listen({ port }, () => console.log(
    `🚀 Server ready at http://localhost:${port}/api`,
  ));
}

startExpressApolloServer();