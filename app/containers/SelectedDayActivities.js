import { connect } from 'react-redux';
import DayActivitiesList from '../components/DayActivitiesList';

const mapStateToProps = (state) => {
  const dateSelected = state.get('DaySelector').get('dateSelected')
  return {
    filteredActivities: state
      .get('DaySelector')
      .get('dates')
      .filter((x) => x.get('date') === dateSelected)
      .filter((x) => x.diff(dateSelected) >= 0),
    dateSelected,
  };
};

const SelectedDayActivities = connect(
  mapStateToProps
)(DayActivitiesList);

export default SelectedDayActivities ;
