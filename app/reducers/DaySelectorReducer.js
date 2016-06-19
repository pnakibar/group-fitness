const { List, Map } = require('immutable');
import { SELECT_DAY, SELECT_ACTIVITY } from '../actions/DaySelectorActions';
import { combineReducers } from 'redux-immutable';
const moment = require('moment');
const mockup = require('./mockup.json').map((a) => {
  a.date = moment(a.date);
  return a;
})
.sort((left, right) => {
  return left.date.diff(right.date);
});




const initialState = Map({
  dateSelected: moment().startOf('day').clone(),
  activities: mockup,
  title: 'Group Fitness',
  selectedActivity: undefined,
  similarActivities: undefined,
})

const filterSimilarActivities = (activities, selectedActivity) => {
  const a = activities
    .filter((a) =>
      a.courseName === selectedActivity.courseName &&
      a.date.clone().startOf('day').diff(selectedActivity.date.clone().startOf('day')) >= 0
    )
    .sort((left, right) => {
      return left.date.diff(right.date);
    });
  return a;
}
const similarActivitiesWrapper = (state, selectedActivity) =>
  state
    .set('selectedActivity', selectedActivity)
    .set(
      'similarActivities',
      filterSimilarActivities(
        state.get('activities'),
        selectedActivity
      )
    )
function daySelectorReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY:
      return state.set('dateSelected', action.date);
    case SELECT_ACTIVITY:
      return similarActivitiesWrapper(state, action.activity)
    default:
      return state;
  }
}

export default daySelectorReducer;
