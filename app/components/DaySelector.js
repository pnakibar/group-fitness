const moment = require('moment');
import React, { Component } from 'react';
import { selectDay } from '../actions/DaySelectorActions';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  StatusBar,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import SelectedDate from './SelectedDate'

class Thumb extends Component {
  _onLayoutEvent(event) {
    this.setState({componentHeight: event.nativeEvent.layout.height});
    console.log('opa');
  }
  constructor () {
    super();
    this._onLayoutEvent = this._onLayoutEvent.bind(this);
    this.state = {
      componentHeight: 0,
    }
  }
  /*
  getInitialState() {
    return {
      componentHeight: 0,
    }
  }
  */
  render() {
    const { date, dateSelected, onPressButton } = this.props;
    const formatedDate = moment(date).format('ddd D').split(' ');
    const [dayText, dayNumber] = formatedDate;
    const isDateSelected = dateSelected.startOf('day').diff(moment(date).startOf('day')) === 0;
    let boxStyle = isDateSelected ?
      [styles.box, styles.boxSelected] :
      styles.box;
    const textStyle = isDateSelected ?
      styles.textSelected :
      styles.text
    const boxSize = {
      height: this.state.componentHeight,
      width: this.state.componentHeight,
    }

    return (
      <TouchableHighlight onPress={onPressButton}>
        <View style={[boxSize, boxStyle]} onLayout={this._onLayoutEvent}>
          <Text style={[textStyle, styles.dayOfWeek]}>
            {dayText.toUpperCase()}
          </Text>
          <Text style={[textStyle, styles.dayOfMonth]}>
            {dayNumber}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }


}

let boxHeight;
const DaySelector = ({ dates, dateSelected, dispatch }) => {
  const _renderRow = (date) => (
    <Thumb
      date={date}
      dateSelected={dateSelected}
      onPressButton={() => dispatch(selectDay(moment(date)))}
    />
  )

  const emptyDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const dataSource = emptyDataSource.cloneWithRows(dates)

  const width = Dimensions.get('window').width;
  const listViewContainerDimesions = {
    height: width,
    width
  };


  return (
    <View style={styles.listViewContainer} >
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={dataSource}
        enableEmptySections={true}
        renderRow={_renderRow}
        horizontal={true}
        contentContainerStyle={styles.listView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listViewContainer: {
    // width: Dimensions.get('window').width,
    flex: 1,
  },
  listView: {
    flex: 1,
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
  },
  box: {
    marginLeft: 1,
    marginRight: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    flex: 1,
    position: 'relative',
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSelected: {
    backgroundColor: '#CC0814',
  },
  dayOfWeek: {
    fontSize: 16,
  },
  dayOfMonth: {
    fontWeight: 'bold',
    fontSize: 42,
  },
  text: {
    color: '#5A5A5A',
  },
  textSelected: {
    color: "#FFF",
  }
});

export default DaySelector;
