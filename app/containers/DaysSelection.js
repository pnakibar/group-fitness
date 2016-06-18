import { connect } from 'react-redux';
import DaySelector from '../components/DaySelector';

const mapStateToProps = (state) => {
  return {
    dates: state.get('courses').keys(),
  };
};

const DaysSelection = connect(
  mapStateToProps
)(DaySelector);

export default DaysSelection;
