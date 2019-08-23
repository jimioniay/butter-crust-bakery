import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import root from './rootReducer';

const middleware =
  process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];

// eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, compose(applyMiddleware(...middleware)));

export default store;
