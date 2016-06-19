import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import TopBar from './TopBar';

const ActivityScreen = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.topbar}>
      <TopBar title={"Yoga Hardcore"} />
    </View>
  </View>
)

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topbar: {
    flex: 0.2,
  },
};
export default ActivityScreen;
