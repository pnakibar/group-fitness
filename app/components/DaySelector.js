const moment = require('moment');
import React, { Component } from 'react';
import { selectDay } from '../actions/DaySelectorActions';
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

const Thumb = ({ date, dateSelected, onPressButton}) => {
  const formatedDate = moment(date).format('ddd D').split(' ');
  const [dayText, dayNumber] = formatedDate;
  const isDateSelected = dateSelected.startOf('day').diff(moment(date).startOf('day')) === 0;
  const boxStyle = isDateSelected ?
    [styles.date.normal.box, styles.date.selected.box] :
    styles.date.normal.box;
  const textStyle = isDateSelected ?
    [styles.date.normal.text, styles.date.selected.text] :
    styles.date.normal.text;

  return (
    <TouchableHighlight onPress={onPressButton}>
      <View style={boxStyle}>
        <Text style={[...textStyle, styles.date.text.top]}>
          {dayText.toUpperCase()}
        </Text>
        <Text style={[...textStyle, styles.date.text.bottom]}>
          {dayNumber}
        </Text>
      </View>
    </TouchableHighlight>
  )
};

const DaySelector = ({ dates, dateSelected, dispatch }) => {
  console.log('dispatch', dispatch);
  console.log('selectDay', selectDay);
  var _scrollView: ScrollView;
  return (
    <View >
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        horizontal={true}
        scrollEventThrottle={200}
        style={styles.scrollView}>
        {dates.map((date, i) =>
          <Thumb
            key={i}
            date={date}
            dateSelected={dateSelected}
            onPressButton={() => dispatch(selectDay(date))}
          />
        )}
      </ScrollView>
    </View>
  );
};


const styles = {
  date: {
    text: {
      top: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 4,
      },
      bottom: {
        marginTop: 4,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 42,
      },
    },
    selected: {
      box: {
        backgroundColor: '#CC0814',
      },
      text: {
        color: "#FFF",
      }
    },
    normal: {
      box: {
        justifyContent:'center',
        paddingTop: 35,
        paddingBottom: 40,
        marginLeft: 1,
        marginRight: 1,
        padding: 5,
        width: 140,
        height: 140,
        alignItems: 'center',
        backgroundColor: '#E7E7E7',
      },
      text: {

      }
    },
  },
  selector: {

  }
};
export default DaySelector;
