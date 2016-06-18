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

const Thumb = ({ text }) => {
  const formatedDate = text.format('ddd D').split(' ');
  const [dayText, dayNumber] = formatedDate;
  const isToday = moment().startOf('day').diff(moment(text).startOf('day')) === 0;
  const boxStyle = isToday ?
    [styles.button, styles.buttonSelected] :
    styles.button;
  const textStyle = isToday ?
    [styles.buttonText, styles.buttonSelectedText] :
    styles.buttonText;

  return (
    <View style={boxStyle}>
      <Text style={textStyle}>
        {dayText.toUpperCase()}
      </Text>
      <Text style={textStyle}>
        {dayNumber}
      </Text>
    </View>
  )
};

const HorizontalTable = ({ texts }) => {
  var _scrollView: ScrollView;
  return (
    <View >
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        horizontal={true}
        scrollEventThrottle={200}
        style={styles.scrollView}>
        {texts.map((c, i) => createThumbRow(c, i))}
      </ScrollView>
    </View>
  );
}
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
          <TouchableHighlight style={{backgroundColor: 'yellow', padding: 10}}
              onPress={this.gotoPersonPage.bind(this)}>
            <Text style={{backgroundColor: 'yellow', color: 'green'}}>Center</Text>
          </TouchableHighlight>
        </View>
      );
    }
    gotoPersonPage() {
      this.props.navigator.push({
        id: 'PersonPage',
        name: '我的主页',
      });
    }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          GROUP FITNESS
        </Text>
      </TouchableOpacity>
    );
  }
};

var styles = StyleSheet.create({
  buttonSelectedText: {
    color: "#FFF",
  },
  scrollView: {
    alignSelf: "stretch",
    height: 140,
    width: Dimensions.get('window').width,
  },
  button: {
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
  buttonSelected: {
    backgroundColor: '#CC0814',
  },
  img: {
    width: 64,
    height: 64,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
