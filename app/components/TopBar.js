import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import {
  Text,
  View,
} from 'react-native';

const TopBar = ({ title }) => (
  <View style={styles.background}>
    <Text style={styles.text}>
      {title.toUpperCase()}
    </Text>
  </View>
)

const styles = {
  background: {
    flex: 1,
    backgroundColor: '#CC0814',
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    color: "#FFF",
    fontSize: 36,
  },
};
export default TopBar;
