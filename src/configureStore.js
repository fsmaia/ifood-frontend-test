import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

import app from './modules/App/reducers/app';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);

const rootReducer = combineReducers({
  app
});

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
