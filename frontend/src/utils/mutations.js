import { gql } from '@apollo/client'



export const CREATE_USER = gql`
mutation CreateUser($username: String!, $email: String!, $password: String!) {
  CreateUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      id
      password
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
 mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      email
      id
      password
      username
    }
  }
}
`;

export const CREATE_QR = gql`

mutation CreateQr($userId: ID!, $url: String!, $qr: String) {
  CreateQr(userId: $userId, url: $url, qr: $qr) {
    
    qr
    url
    userId
    
  }
}
`