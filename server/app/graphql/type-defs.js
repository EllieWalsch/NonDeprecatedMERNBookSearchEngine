// 🤯 With Apollo Server 4, no need to import gql from 'graphql-tag' 🤯
// "The gql tag is no longer required to parse GraphQL queries. You can now use plain template strings instead."
// https://www.apollographql.com/docs/apollo-server/migration/#gql-tag
export default `
  type Query {
    currentUser: User
  }

  type Mutation {
    "Create a new user"
    createUser(user: UserInput): CreateUserLoginResponse!

    # It is debatable that this is a Query. Convention states that it should generally be a Mutation.
    # https://stackoverflow.com/questions/50189364/shouldnt-the-login-be-a-query-in-graphql/50190570#50190570
    "Login with username and password"
    login(username: String!, password: String!): CreateUserLoginResponse!
    "Save a 📖 for logged in user"
    saveBook(book: BookInput!): Book!
    "Remove a 📖 for logged in user"
    removeBook(bookId: ID!): Book!
  }

  type CreateUserLoginResponse {
    "JWT"
    token: ID!
  }

  type Book {
    "ISBN"
    bookId: ID!
    authors: [String!]!
    description: String
    "URL to book cover image"
    image: String
    "URL to book on Google Books"
    link: String
    title: String!
    "The user who saved this book"
    userId: ID!
  }

  type User {
    id: ID!
    username: String!
    books: [Book!]!
  }

  # There doesn't appear to be a way to DRY up this code type 📖 ☝️ 😞
  input BookInput {
    "ISBN"
    bookId: ID!
    authors: [String!]!
    description: String
    "URL to book cover image"
    image: String
    "URL to book on Google Books"
    link: String
    title: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
`;
