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

const Thumb = ({ date, dateSelected, onPressButton }) => {
  const formatedDate = moment(date).format('ddd D').split(' ');
  const [dayText, dayNumber] = formatedDate;
  const isDateSelected = dateSelected.startOf('day').diff(moment(date).startOf('day')) === 0;
  const boxStyle = isDateSelected ?
    [styles.box, styles.boxSelected] :
    styles.box;
  const textStyle = isDateSelected ?
    styles.textSelected :
    styles.text

  return (
    <TouchableHighlight onPress={onPressButton}>
      <View style={boxStyle}>
        <Text style={[textStyle, styles.dayOfWeek]}>
          {dayText.toUpperCase()}
        </Text>
        <Text style={[textStyle, styles.dayOfMonth]}>
          {dayNumber}
        </Text>
      </View>
    </TouchableHighlight>
  )
};

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

  return (
    <ListView
      automaticallyAdjustContentInsets={false}
      dataSource={dataSource}
      enableEmptySections={true}
      renderRow={_renderRow}
      horizontal={true}
      contentContainerStyle={styles.listView}
    />
  );
};

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: '#0F0',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  box: {
    justifyContent:'center',
    marginLeft: 1,
    marginRight: 1,
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E7E7E7',
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
