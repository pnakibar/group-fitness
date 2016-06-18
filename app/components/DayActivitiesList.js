import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';

const listEntries = [1,2,3,4,5,6,7,8,9].map((x, i) => {
  return {
    id: i,
    data: x,
  }
});
const Row = ({ data }) => (
  <View style={styles.wrapper}>
    <View>
      <Text style={styles.text}>{data.data}</Text>
    </View>
  </View>
)
// Props filteredActivities
class DayActivitiesList extends Component {
  _renderRow(rowData) {
    return (<Row data={rowData} style={styles.row}/>);
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
