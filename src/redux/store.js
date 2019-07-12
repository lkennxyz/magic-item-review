import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reviewApp from '@redux/reducers';

const store = createStore(
  reviewApp, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;