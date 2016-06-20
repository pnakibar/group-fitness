import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
const moment = require('moment');
const TODAY = moment().startOf('day');
const isToday = (date) => moment(date).clone().startOf('day').diff(TODAY) === 0;
const Date = ({ date }) => {
  if (isToday(date)) {
    return (
      <Text style={rowStyle.day}>TODAY</Text>
    )
  }
  return (
    <View>
      <Text style={rowStyle.day}>
        {date.format('Do').toUpperCase()}
      </Text>
      <Text style={rowStyle.weekDay}>
        {date.format('ddd').toUpperCase()}
      </Text>
    </View>
  )
}

const Row = ({ date, instructor, place}) => (
  <TouchableHighlight onPress={() => console.log('pressed!')}>
    <View style={rowStyle.container}>
      <View style={rowStyle.dateContainer}>
        <Date date={date} />
      </View>
      <View style={rowStyle.hourContainer}>
        <Text style={rowStyle.hour}>
          {date.format('HH:MM A')}
        </Text>
      </View>
      <View style={rowStyle.activityContainer}>
        <Text style={rowStyle.instructor}>
          {instructor}
        </Text>
        <Text style={rowStyle.place}>
          {place}
        </Text>
      </View>
    </View>
  </TouchableHighlight>

)
const ActivityList = ({ activities, pressRow }) => {
  const _renderRow = (rowData) => {
    return (
      <Row
        date={rowData.date}
        instructor={rowData.instructor}
        place={rowData.place}
        onPress={pressRow}
      />
    );
  }

  const emptyDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const dataSource = emptyDataSource.cloneWithRows(activities);

  return (
    <ListView
      automaticallyAdjustContentInsets={false}
      dataSource={dataSource}
      enableEmptySections={true}
      renderRow={_renderRow}
    />
  );
}

var rowStyle = StyleSheet.create({
  // the row
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },

  // date, first column
  dateContainer: {
    flex: 0.2,
    flexDirection: 'column',
  },
  // first row
  day: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#CC0814',
  },
  // second row
  weekDay: {
    fontSize: 18,
    color: '#a8a8a8',
  },

  // hour, second column
  hourContainer: {
    flex: 0.3,
    flexDirection: 'column',
  },
  hour: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },

  // activity, third column
  activityContainer: {
    flex: 0.5,
    flexDirection: 'column',
  },
  // instructor, first row
  instructor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  // place
  place: {
    fontSize: 18,
    color: '#a8a8a8',
  },
});
export default ActivityList;
