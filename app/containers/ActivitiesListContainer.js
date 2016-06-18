import { connect } from 'react-redux';
import ActivitiesList from '../components/ActivitiesList';
const moment = require('moment');
const { Set } = require('immutable');

const mapStateToProps = (state) => {
  const uniqueDates = Set(state.get('daySelectorReducer').get('activities').map((a) => moment(a.date).clone().startOf('day')))
    .toArray()
    .sort((left, right) => {
      return left.diff(right)
    })
  return {
    activities: state.get('daySelectorReducer').get('activities'),
    dateSelected: state.get('daySelectorReducer').get('dateSelected'),
    title: state.get('daySelectorReducer').get('title'),
    selectedDayActivities: [],
    uniqueDates,
  };
};

const ActivitiesListContainer = connect(
  mapStateToProps
)(ActivitiesList);

export default ActivitiesListContainer;
