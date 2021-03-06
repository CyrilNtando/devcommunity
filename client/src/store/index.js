import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const middlewares = [thunk, logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
