import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStoreWithMiddleware = compose(composeWithDevTools(applyMiddleware(ReduxThunk)))(
  createStore
);

export default (initialState = {}) => {
  const store = createStoreWithMiddleware(persistedReducer, initialState);

  return {
    store,
    persistor: persistStore(store)
  };
};
