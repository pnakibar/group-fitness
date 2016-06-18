import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const TopBar = ({ title }) => (
  <View style={styles.background}>
    <Text style={styles.text}>
      {title}
    </Text>
  </View>
)

const styles = {
  background: {
    justifyContent: 'center',
    backgroundColor: '#CC0814',
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent:'center',
    height: 150,
  },
  text: {
    color: "#FFF",
    fontSize: 36,
  },
};
export default TopBar;
