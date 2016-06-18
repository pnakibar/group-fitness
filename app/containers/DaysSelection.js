import { connect } from 'react-redux';
import DaySelector from '../components/DaySelector';

const mapStateToProps = (state) => {
  return {
    dates: state.get('DaySelector').get('dates'),
    dateSelected: state.get('DaySelector').get('dateSelected'),
  };
};

const DaysSelection = connect(
  mapStateToProps
)(DaySelector);

export default DaysSelection;
