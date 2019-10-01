import ApolloClient from 'apollo-boost';
import { getItems } from '@graphql/Queries';

export const SET_LIST = 'SET_LIST';

const client = new ApolloClient({ uri: '/api' });

function setListSuccess(array) {
  return { type: SET_LIST, array };
}

export function setList() {
  return dispatch => 
    client.query({ query: getItems() })
      .then(({ data }) => {
        dispatch(setListSuccess(data.reviewList))
      })
      .catch(err => {
        console.error(err);
      });
}
