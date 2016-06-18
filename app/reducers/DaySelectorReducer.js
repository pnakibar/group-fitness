const { List, Map } = require('immutable');
import { SELECT_DAY } from '../actions/DaySelectorActions';
import { combineReducers } from 'redux-immutable';
const moment = require('moment');

const today = moment();
const numberOfDays = [1,2,3,4,5];
const beforeToday = numberOfDays.map((x) => moment(today).subtract(x, 'days')).reverse();
const afterToday = numberOfDays.map((x) => moment(today).add(x, 'days'));
const dates = [...beforeToday, today, ...afterToday]

const initialState = Map({
  dateSelected: moment(),
  courses: [],
  dates
})


function DaySelector(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY:
      return state.set('dateSelected', action.date);
    default:
      return state;
  }
}

export default DaySelector;
