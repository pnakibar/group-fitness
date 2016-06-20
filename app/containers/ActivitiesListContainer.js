import { connect } from 'react-redux';
import ActivitiesList from '../components/ActivitiesList';
const moment = require('moment');
const { Set } = require('immutable');

const mapStateToProps = (state) => {
  const activities = state.get('daySelectorReducer').get('activities');
  const uniqueDates = Set(activities.map((a) => moment(a.date).clone().startOf('day')))
    .toArray()
    .filter((d) => moment().startOf('day').diff(d) <= 0)
    .sort((left, right) => {
      return left.diff(right)
    })
  uniqueDates.forEach((x) => console.log(x));
  const dateSelected = state.get('daySelectorReducer').get('dateSelected');
  const selectedDayActivities = activities.filter((a) => {
    const startOfIterDate = a.date.clone().startOf('day');
    const startOfDateSelected = dateSelected.clone().startOf('day');
    return startOfDateSelected.diff(startOfIterDate) === 0;
  })
  return {
    title: state.get('daySelectorReducer').get('title'),
    activities,
    dateSelected,
    selectedDayActivities,
    uniqueDates,
  };
};

const ActivitiesListContainer = connect(
  mapStateToProps
)(ActivitiesList);

export default ActivitiesListContainer;
