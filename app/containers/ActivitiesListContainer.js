import { connect } from 'react-redux';
import ActivitiesList from '../components/ActivitiesList';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    activities: state.get('daySelectorReducer').get('activities'),
    dateSelected: state.get('daySelectorReducer').get('dateSelected'),
    title: state.get('daySelectorReducer').get('title'),
  };
};

const ActivitiesListContainer = connect(
  mapStateToProps
)(ActivitiesList);

export default ActivitiesListContainer;
