import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
  }

  type Query {
    getAllStudents: [Student]
    getStudentById(id: ID!): Student
  }
`;
