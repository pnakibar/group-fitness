import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectedDate from './SelectedDate'
const nextIcon = (<Icon name="chevron-right" size={48} color="#b2b2b2" />)
const moment = require('moment');

/*
const Row = ({ date, courseName, place, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={rowStyle.container}>
        <View style={rowStyle.timeContainer}>
          <Text style={rowStyle.hour}>{date.clone().format('HH:MM A')}</Text>
        </View>
        <View style={rowStyle.activityContainer} >
          <Text style={rowStyle.course}>{courseName.toUpperCase()}</Text>
          <Text style={rowStyle.place}>{place.toUpperCase()}</Text>
        </View>
        <View style={rowStyle.iconContainer}>
          {nextIcon}
        </View>
    </View>
  </TouchableHighlight>
)
*/
const Row = ({ date, instructor, place}) => (
  <TouchableHighlight onPress={() => console.log('pressed!')}>
    <View style={rowStyle.container}>
      <View style={rowStyle.dateContainer}>
        <Text style={rowStyle.day}>
            {date.format('Do').toUpperCase()}
        </Text>
        <Text style={rowStyle.weekDay}>
          {date.format('ddd').toUpperCase()}
        </Text>
      </View>
      <View style={rowStyle.hourContainer}>
        <Text style={rowStyle.hour}>
          {date.format('HH:MM A')}
        </Text>
      </View>
    </View>
  </TouchableHighlight>

)
// Props filteredActivities
const activities = [
  {
      date: moment(),
      instructor: 'Instructor Teste',
      place: 'Place Teste'
  },
]
const SameActivitiesList = ({ pressRow }) => {
  const _renderRow = (rowData) => {
    return (
      <Row
        date={rowData.date}
        courseName={rowData.courseName}
        place={rowData.place}
        onPress={pressRow}
      />
    );
  }

  const _renderSectionHeader = (data, sectionId) => {
    var text;
    return (
      <SelectedDate date={this.props.SelectedDate} />
    )
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
    backgroundColor: '#00AA00',
  },

  // date, first column
  dateContainer: {
    flex: 0.3,
    flexDirection: 'column',
    backgroundColor: '#FF0000',
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00FF00'
  },
  hour: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  activityContainer: {
    flexDirection: "column",
    flex: 0.6,
  },
});
export default SameActivitiesList;
