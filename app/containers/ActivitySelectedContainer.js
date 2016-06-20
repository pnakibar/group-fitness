import { connect } from 'react-redux';
import ActivityScreen from '../components/ActivityScreen';

const mapStateToProps = (state) => {
  const selectedActivity = state.get('daySelectorReducer').get('selectedActivity');
  const similarActivities  = state.get('daySelectorReducer').get('similarActivities');
  
  return {
    similarActivities,
    selectedActivity,
  };
};

const ActivityScreenContainer = connect(
  mapStateToProps
)(ActivityScreen);

export default ActivityScreenContainer;
