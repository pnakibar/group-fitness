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
        instructor={rowData.instructor}
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
export default SameActivitiesList;
