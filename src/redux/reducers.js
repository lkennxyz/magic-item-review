import { SET_LIST } from '@redux/actions';

const initialState = {
  itemList: [],
};

export default function reviewApp(state = initialState, action) {
  switch(action.type) {
    case SET_LIST:
      return Object.assign({}, state, {
        itemList: action.array,
      });
    default:
      return state;
  }
}