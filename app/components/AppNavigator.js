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
import TopBar from './TopBar';
import DaysSelection from '../containers/DaysSelection';
import SelectedDate from '../components/SelectedDate';
import DayActivitiesList from './DayActivitiesList';

class AppNavigator extends Component {
  render() {
      return (
        <Navigator
            renderScene={this.renderScene.bind(this)}
            navigator={this.props.navigator}
        />
      );
    }
    renderScene(route, navigator) {
      return (
        <View style={styles.container}>
          <View style={styles.topbar}>
            <TopBar title="GROUP FITNESS"/>
          </View>
          <View style={styles.daySelector}>
            <DaysSelection />
          </View>
          <View style={styles.activitiesContainer}>
            <View>
              <SelectedDate date={new Date()} />
            </View>
            <View style={styles.dayActivities}>
              <DayActivitiesList />
            </View>
          </View>
        </View>
      );
    }
}

var styles = StyleSheet.create({
    activitiesContainer: {
      flexDirection: 'column',
      marginLeft: 12,
      marginRight: 12,
      marginTop: 12,
      flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    dayActivities: {
      flex: 1,
    },
    topbar: {
      flex: 0.2,
    },
    daySelector: {
      flex: 0.4,
    },
});


export default AppNavigator;
