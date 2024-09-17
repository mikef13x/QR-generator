import {gql} from '@apollo/client'

export const QUERY_USERS = gql`
query GetUsers {
  getUsers {
    email
    id
    password
    username
  }
}
`
export const QUERY_HISTORY = gql`
query Query($userId: ID!) {
  getHistory(userId: $userId) {
    id
    qr
    url
    userId
  }
}
`