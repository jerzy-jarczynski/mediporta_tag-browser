import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tagsReducer from './tagsRedux';

const subreducers = {
  tags: tagsReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;