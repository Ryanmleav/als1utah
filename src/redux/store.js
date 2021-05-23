import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import adminReducer from './adminReducer';


const rootreducer = combineReducers({
 
  user: adminReducer
})

export default createStore(rootreducer, applyMiddleware(promiseMiddleware))