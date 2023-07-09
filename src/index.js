const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT || 4000;
let notes = [
  { id: '1', content: 'This is a note', author: 'Adam Scott' },
  { id: '2', content: 'This is another note', author: 'Harlow Everly' },
  { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
];

// app.get('/', (req, res) => res.send('Hello World!!!!!!'));

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!
  }
`;

// Provide resolver functions f or our schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello World2',
    notes: () => notes,
    note: (parent, args) => {
        return notes.find(note => note.id === args.id)
    }
  },
  Mutation: {
    newNote: (parent, args) => {
        const newNote = {
            id: String(notes.length + 1),
            content: args.content,
            author: 'George'
        }
        notes.push(newNote);
        return newNote;
    }
  }
};

const app = express();

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Apply the Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: '/api' });

app.listen(port, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
