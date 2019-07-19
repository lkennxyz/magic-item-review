import ApolloClient from 'apollo-boost';
import { getReview, getCompleted } from '@graphql/Queries';

export const SET_REVIEW_LIST = 'SET_REVIEW_LIST';
export const SET_COMPLETED_LIST = 'SET_COMPLETE_LIST';
export const SET_FILTER = 'SET_FILTER';
export const SET_ITEM = 'SET_ITEM';
export const SET_VISIBILITY = 'SET_VISIBILITY';
export const SET_TYPE = 'SET_TYPE';

const client = new ApolloClient({ uri: '/api' });

function setReviewListSuccess(array) {
  return { type: SET_REVIEW_LIST, array };
}

function setCompletedListSuccess(array) {
  return { type: SET_COMPLETED_LIST, array };
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}

export function setVisibility(visible) {
  return { type: SET_VISIBILITY, visible };
}

function setItem(item) {
  return { type: SET_ITEM, item };
}

export function setType(itemType) {
  return { type: SET_TYPE, itemType };
}

export function refresh() {
  return dispatch => {
    dispatch(setReviewList());
    dispatch(setCompletedList());
  }
}

export function selectItem(item) {
  return dispatch => {
    dispatch(setItem(item));
    dispatch(setVisibility(true));
  }
}

export function setReviewList() {
  return dispatch => 
    client.query({ query: getReview() })
      .then(({ data }) => {
        dispatch(setReviewListSuccess(data.reviewList))
      })
      .catch(err => {
        console.error(err);
      });
}

export function setCompletedList() {
  return dispatch => 
    client.query({ query: getCompleted() })
      .then(({ data }) => {
        dispatch(setCompletedListSuccess(data.completeList))
      })
      .catch(err => {
        console.error(err);
      });
}

export function saveItem(id, item) {
  return dispatch =>
    dispatch(setItem(item));
}