import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
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
import { Actions } from 'react-native-router-flux'
const moment = require('moment');
const { Set } = require('immutable');
import TopBar from './TopBar';
import SelectedDate from './SelectedDate';
import DayActivitiesList from './DayActivitiesList';
import DaySelector from './DaySelector';
import { selectActivity } from '../actions/DaySelectorActions';

const ActivitiesList = ({ title, dateSelected, activities, dispatch, selectedDayActivities, uniqueDates }) => {
  const pushToNavigator = (activity) => {
    Actions.activitySelected()
    dispatch(selectActivity(activity))
  };
  return (
    <View style={styles.container}>
      <View style={styles.topbarContainer}>
        <TopBar title={title}/>
      </View>
      <View style={styles.datePickerContainer}>
        <DaySelector dateSelected={dateSelected} dates={uniqueDates} dispatch={dispatch}/>
      </View>
      <View style={styles.activitiesContainer}>
        <View>
          <SelectedDate date={dateSelected} />
        </View>
        <View style={styles.listContainer}>
          <DayActivitiesList activities={selectedDayActivities} pressRow={pushToNavigator}/>
        </View>
      </View>
    </View>
  )
};
var styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      flex: 1,
      flexDirection: 'column'
    },
    topbarContainer: {
      flex: 0.15,
    },
    datePickerContainer: {
      flex: 0.2,
    },
    activitiesContainer: {
      flexDirection: 'column',
      marginLeft: 12,
      marginRight: 12,
      flex: 0.65,
    },
    listContainer: {
      flex: 1,
      backgroundColor: '#0FF',
    },


});
export default ActivitiesList;
