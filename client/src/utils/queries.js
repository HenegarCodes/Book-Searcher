import { gql } from '@apollo/client';

export const QUERY_USER = gql`
me {
    _id
    bookCount
    email
    savedBooks {
      title
      link
      image
      description
      bookId
      authors
    }
    username
  }
`;

