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

const Row = ({ date, courseName, place }) => (
  <TouchableHighlight onPress={() => console.log('pressed!')}>
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
// Props filteredActivities
class DayActivitiesList extends Component {
  _renderRow(rowData) {
    return (
      <Row
        date={rowData.date}
        courseName={rowData.courseName}
        place={rowData.place}
        style={styles.row}
      />
    );
  }
  _renderSectionHeader(data, sectionId) {
    var text;
    return (
      <SelectedDate date={this.props.SelectedDate} />
    )
  }

  render() {
    const emptyDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = emptyDataSource.cloneWithRows(this.props.activities)
    console.log(this.props.activities)
    return (
      <ListView
        ref="DayActivitiesList"
        automaticallyAdjustContentInsets={false}
        dataSource={dataSource}
        enableEmptySections={true}
        renderRow={this._renderRow}
      />
    );
  }
}

var rowStyle = StyleSheet.create({
  timeContainer: {
    alignItems: 'flex-start',
    flex: 0.4,
  },
  activityContainer: {
    flexDirection: "column",
    flex: 0.6,
  },
  iconContainer: {
    alignItems: 'flex-end',
    flex: 0.2,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  hour: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#CC0814',
  },
  place: {
    fontSize: 18,
    color: '#a8a8a8',
  },
  course: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  text: {
    fontSize: 24,
    fontWeight: "100",
    color: 'black',
  },
  sectionHeader: {
    backgroundColor: '#48D1CC'
  },
  sectionHeaderText: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 16,
    color: 'white',
    paddingLeft: 10
  },
});
export default DayActivitiesList;
