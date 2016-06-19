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
import ActivitiesListContainer from '../containers/ActivitiesListContainer'
import ActivityScreen from './ActivityScreen'
class AppNavigator extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'ActivitiesListContainer', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    switch (route.id) {
      case 'ActivitiesListContainer':
        return (<ActivitiesListContainer navigator={navigator} />);
      case 'ActivityMenu':
        return (<ActivityScreen />)
    }
  }
}

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
