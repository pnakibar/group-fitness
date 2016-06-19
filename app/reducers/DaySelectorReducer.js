const { List, Map } = require('immutable');
import { SELECT_DAY } from '../actions/DaySelectorActions';
import { combineReducers } from 'redux-immutable';
const moment = require('moment');
const mockup = require('./mockup.json').map((a) => {
  a.date = moment(a.date);
  return a;
});

const initialState = Map({
  dateSelected: moment().startOf('day').clone(),
  activities: mockup,
  title: 'Group Fitness',
  selectedActivity: undefined,
})


function daySelectorReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY:
      return state.set('dateSelected', action.date);
    default:
      return state;
  }
}

export default daySelectorReducer;
