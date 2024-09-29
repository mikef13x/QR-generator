const typeDefs = `

input UserInput {
    username: String
    email: String
    password: String
}

type User {
    id: ID!
    username: String!
    email: String!
    password: String!
}

type Qr {
    id: ID!
    userId: ID!
    url: String!
    qr: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    getHistory(userId: ID!): [Qr]
    getUsers: [User]
    getUser(userId: ID!): User

}

type Mutation {
    CreateUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    CreateQr(userId: ID!, url: String!, qr: String): Qr
}
`

module.exports = typeDefs