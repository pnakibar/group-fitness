import { connect } from 'react-redux';
import ActivityScreen from '../components/ActivityScreen';
const moment = require('moment');
const { Set } = require('immutable');

const mapStateToProps = (state) => {
  const selectedActivity = state.get('daySelectorReducer').get('selectedActivity')
  const similarActivities = state
    .get('daySelectorReducer')
    .get('activities')
    .filter((a) => a.courseName === selectedActivity.courseName)
  return {
    similarActivities,
    selectedActivity,
  };
};

const ActivityScreenContainer = connect(
  mapStateToProps
)(ActivityScreen);

export default ActivityScreenContainer;
