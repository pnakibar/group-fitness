import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const moment = require('moment');

const SelectedDate = ({ date }) => (
  <View>
    <Text style={styles.text}>
      {moment(date).format('MMMM D, YYYY')}
    </Text>
  </View>
)

const styles = {
  background: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 12,
  },
  text: {
    color: "#656565",
    fontSize: 28,
  },
};
export default SelectedDate;
