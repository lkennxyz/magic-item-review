import gql from 'graphql-tag';

export function getItems() {
  return gql`
    query {
      reviewList {
        description,
        _id
      }
    }
  `;
}