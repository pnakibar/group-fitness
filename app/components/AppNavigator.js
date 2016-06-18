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
        <ActivitiesListContainer />
      );
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
