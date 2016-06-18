/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const moment = require('moment')
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

import TopBar from './app/components/TopBar';
import DaySelector from './app/components/DaySelector';

const generateDate = (days) => moment().add(days, 'days')
const today = moment();
const numberOfDays = [1,2,3,4,5];
const beforeToday = numberOfDays.map((x) => moment(today).subtract(x, 'days')).reverse();
const afterToday = numberOfDays.map((x) => moment(today).add(x, 'days'));
const THUMBS = [...beforeToday, today, ...afterToday]


class AwesomeProject extends Component {
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
        <View style={{flexDirection: 'column'}}>
          <TopBar title="GROUP FITNESS" />
        <DaySelector dates={THUMBS} />
        </View>
      );
    }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
