import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';
import TopBar from './TopBar';
import ActivityList from './ActivityList';
const moment = require('moment');

const MAX_TEXT_SIZE = 160;
const makeTextFit = (text) => {
  const t = text.slice(0, MAX_TEXT_SIZE)
  if (text.length > MAX_TEXT_SIZE) return t + '...'
  return t;
};
const ReadMore = () => (
  <TouchableNativeFeedback onPress={() => console.log('pressed!')}>
    <View>
      <Text style={styles.readMoreButton}>{"READ MORE"}</Text>
    </View>
  </TouchableNativeFeedback>
);
const ActivityScreen = ({ selectedActivity, similarActivities }) => (
  <View style={styles.container}>
    <View style={styles.topbarContainer}>
      <TopBar title={selectedActivity.courseName} />
    </View>
    <View style={styles.descriptionContainer}>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.description}>
          {makeTextFit(selectedActivity.description)}
        </Text>
      </View>
      <View style={styles.readMoreContainer}>
          {selectedActivity.description.length > 270 ? (<ReadMore />) : undefined}
      </View>
    </View>
    <View style={styles.monthContainer}>
      <Text style={styles.month}>
        {moment(selectedActivity.date).format('MMMM Y').toUpperCase()}
      </Text>
    </View>
    <View style={styles.listContainer}>
      <ActivityList activities={similarActivities}/>
    </View>
  </View>
)

const styles = {
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column'
  },
  topbarContainer: {
    flex: 0.15,
  },
  descriptionContainer: {
    flex: 0.25,
    flexDirection: 'column',
    margin: 10,
  },
  descriptionTextContainer: {
    flex: 0.7,
  },
  readMoreContainer : {
    flex: 0.3,
    alignSelf: "stretch",
    justifyContent:'center',
  },
  description: {
    fontSize: 20,
    textAlign: 'justify'
  },
  readMoreButton: {
    color: '#CC0814',
    fontWeight: 'bold',
    fontSize: 20,
  },
  monthContainer: {
    flex: 0.1,
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent:'center',
  },
  month: {
    color: '#5A5A5A',
    fontWeight: 'bold',
    fontSize: 26,
  },
  listContainer: {
    flex: 0.5,
    marginRight: 12,
    marginLeft: 12,
  },
};
export default ActivityScreen;
