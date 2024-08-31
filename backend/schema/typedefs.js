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
    getQr(userId: ID!): Qr

}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createQr(userId: ID!, url: String!, qr: String): Qr
}
`

module.exports = typeDefs