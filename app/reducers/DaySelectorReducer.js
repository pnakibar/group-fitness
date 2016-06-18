const { List, Map } = require('immutable');
import { SELECT_DAY } from './actions';
import { combineReducers } from 'redux-immutable';
const moment = require('moment');

const initialState = Map({
  daySelected: moment(),
  courses: []
})


function daySelector(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY:
      return state.set('daySelected', action.date);
    default:
      return state;
  }
}

const todoApp = combineReducers({
  customers: customersReducer,
  generalUI: generalUIReducer,
});

export default todoApp;
