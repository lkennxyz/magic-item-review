import { SET_COMPLETED_LIST, SET_REVIEW_LIST, SET_FILTER, SET_ITEM, SET_VISIBILITY } from '@redux/actions';

const initialState = {
  reviewList: [],
  completedList: [],
  item: {},
  filter: 'REVIEW',
  visible: false,
};

export default function reviewApp(state = initialState, action) {
  switch(action.type) {
    case SET_REVIEW_LIST:
      return Object.assign({}, state, {
        reviewList: action.array,
      });
    case SET_COMPLETED_LIST:
      return Object.assign({}, state, {
        completedList: action.array,
      });
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.filter,
      });
    case SET_ITEM:
      return Object.assign({}, state, {
        item: action.item,
      });
    case SET_VISIBILITY:
      return Object.assign({}, state, {
        visible: action.visible,
      });
    default:
      return state;
  }
}