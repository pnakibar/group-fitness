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
  }
  constructor () {
    super();
    this._onLayoutEvent = this._onLayoutEvent.bind(this);
    this._isDateSelected = this._isDateSelected .bind(this);
    this.state = {
      componentHeight: 0,
    }
  }

  _isDateSelected () {
    const { date, dateSelected } = this.props;
    return dateSelected.startOf('day').diff(moment(date).startOf('day')) === 0;

  }

  render() {
    const { date, dateSelected, onPressButton } = this.props;
    const formatedDate = moment(date).format('ddd D').split(' ');
    const [dayText, dayNumber] = formatedDate;
    const isDateSelected = this._isDateSelected();
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

class DaySelector extends Component {
  constructor () {
    super();
    this._renderRow = this._renderRow.bind(this);
    this._onLayoutEvent = this._onLayoutEvent.bind(this);
    this.state = {
      componentHeight: 0,
      componentWidth: 0,
    }
  }

  componentDidMount () {
  }

  _onLayoutEvent(event) {
    const { height, width } = event.nativeEvent.layout
    this.setState({
      componentHeight: height,
      componentWidth: width,
    });
  }

  _renderRow (date, id, index) {
    return (
      <Thumb
        date={date}
        dateSelected={this.props.dateSelected}
        onPressButton={() => this.props.dispatch(selectDay(moment(date)))}
      />
    )
  }

  render () {
    const { dates, dateSelected, dispatch } = this.props;

    const emptyDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = emptyDataSource.cloneWithRows(dates)

    return (
      <View style={styles.listViewContainer} onLayout={this._onLayoutEvent}>
        <ListView
          ref={(component) => this._listView = component}
          style={{flex: 1}}
          automaticallyAdjustContentInsets={false}
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={this._renderRow}
          horizontal={true}
          contentContainerStyle={styles.listView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listViewContainer: {
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
