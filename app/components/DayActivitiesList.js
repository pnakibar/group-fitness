import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const nextIcon = (<Icon name="child-friendly" size={48} color="#900" />)

const listEntries = [
  {
    time: '11:35 AM',
    class: 'Body Strong',
    place: 'Cole Field House Room 5'
  },
  {
    time: '11:35 AM',
    class: 'Body Strong',
    place: 'Cole Field House Room 5'
  }
]
const Row = ({ time, course, place }) => (
  <View style={rowStyle.container}>
    <View flexDirection="row" >
      <Text style={rowStyle.hour}>{time}</Text>
      <View flexDirection="column" style={rowStyle.courseContainer}>
        <Text style={rowStyle.course}>{course}</Text>
        <Text style={rowStyle.place}>{place}</Text>
      </View>
      {nextIcon}
    </View>
  </View>
)
// Props filteredActivities
class DayActivitiesList extends Component {
  _renderRow(rowData) {
    return (
      <Row
        time={rowData.time}
        course={rowData.class}
        place={rowData.place}
        style={styles.row}
      />
    );
  }
  renderSectionHeader(data, sectionId) {
    var text;
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionId}</Text>
      </View>
    );
  }

  render() {
    const emptyDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = emptyDataSource.cloneWithRows(listEntries)
    return (
      <ListView
        ref="DayActivitiesList"
        automaticallyAdjustContentInsets={false}
        dataSource={dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

var rowStyle = StyleSheet.create({
  courseContainer: {
    paddingLeft: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
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
