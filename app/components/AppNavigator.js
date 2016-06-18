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
          <TopBar title="GROUP FITNESS" style={styles.halfHeight}/>
          <DaysSelection />
          <DayActivitiesList />
        </View>
      );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    halfHeight: {
        flex: .5,
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#000'
    }
});


export default AppNavigator;
