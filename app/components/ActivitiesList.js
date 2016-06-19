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
const moment = require('moment');
const { Set } = require('immutable');
import TopBar from './TopBar';
import SelectedDate from './SelectedDate';
import DayActivitiesList from './DayActivitiesList';
import DaySelector from './DaySelector'

const ActivitiesList = ({ title, dateSelected, activities, dispatch, selectedDayActivities, uniqueDates, navigator }) => {
  const pushToNavigator = (idActivity) => {
    console.log('called');
    navigator.replace({
      id: 'ActivityMenu',
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TopBar title={title}/>
      </View>
      <View style={styles.daySelector}>
        <DaySelector dateSelected={dateSelected} dates={uniqueDates} dispatch={dispatch}/>
      </View>
      <View style={styles.activitiesContainer}>
        <View>
          <SelectedDate date={dateSelected} />
        </View>
        <View style={styles.dayActivities}>
          <DayActivitiesList activities={selectedDayActivities} pressRow={pushToNavigator}/>
        </View>
      </View>
    </View>
  )
};
var styles = StyleSheet.create({
    activitiesContainer: {
      flexDirection: 'column',
      marginLeft: 12,
      marginRight: 12,
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    dayActivities: {
      flex: 0.4,
    },
    topbar: {
      flex: 0.2,
    },
    daySelector: {
      flex: 0.4,
    },
});
export default ActivitiesList;
