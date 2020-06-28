import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({ history: itemReducer });

export default rootReducer;
