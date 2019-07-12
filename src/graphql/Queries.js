import gql from 'graphql-tag';

export function getReview() {
  return gql`
    query {
      reviewList {
        description,
        _id
      }
    }
  `;
}

export function getCompleted() {
  return gql`
    query {
      completeList {
        description,
        _id
      }
    }
  `;
}

export function getItem(id) {
  return gql`
    query {
      getItem(id: ${id}) {
        description,
        _id
      }
    }
  `;
}