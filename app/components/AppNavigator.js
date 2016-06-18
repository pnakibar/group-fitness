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
        <View>
          <TopBar title="GROUP FITNESS" />
          <DaysSelection />
        </View>
      );
    }
}

export default AppNavigator;
