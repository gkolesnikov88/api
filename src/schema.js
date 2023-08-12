const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  scalar DateTime,
  type Note {
    id: ID!
    content: String!
    author: User!,
    createdAt: DateTime!,
    updatedAt: DateTime!
  }
  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!,
    updateNote(id: ID!, content: String!): Note!,
    deleteNote(id: ID!): Boolean!,
    signUp(username: String!, email: String!, password: String!): String!,
    signIn(username: String, email: String, password: String!): String!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
  }
`;

module.exports = typeDefs;