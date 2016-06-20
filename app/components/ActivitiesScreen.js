import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import TopBar from './TopBar';
import SelectedDate from './SelectedDate';
import DayActivitiesList from './DayActivitiesList';
import DaySelector from './DaySelector';
import { selectActivity } from '../actions/DaySelectorActions';

const ActivitiesScreen = ({ title, dateSelected, activities, dispatch, selectedDayActivities, uniqueDates }) => {
  const pushToNavigator = (activity) => {
    Actions.activityScreen()
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
        <View style={styles.selectedDateContainer}>
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
    selectedDateContainer: {
      flex: 0.15,
      alignSelf: "stretch",
      justifyContent:'center',
    },
    listContainer: {
      flex: 0.85,
    },


});
export default ActivitiesScreen;
