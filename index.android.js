/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  ScrollView
} from 'react-native';
/*
var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.button}>
        <Text>
          {this.props.data}
        </Text>
      </View>
    );
  }
});

const MyThumb = ({ text }) => (
  <View>
    <Text>
      {text}
    </Text>
  </View>
)

const myData = ['111', '123', '456', 'asd', 'asd', 'asd', 'asd', 'asd']

const HorizontalBar = ({ data }) => (
  <View>
    <ScrollView
      horizontal={true}
      style={[styles.scrollView, styles.horizontalScrollView]}
      borderWidth={5}
      automaticallyAdjustContentInsets={false}
    >
      {data.map((x) => <MyThumb text={x}/>)}
    </ScrollView>
  </View>
)
*/

class AwesomeProject extends Component {
  render() {
      return (
        <Navigator
            renderScene={this.renderScene.bind(this)}
            navigator={this.props.navigator}
            navigationBar={
              <Navigator.NavigationBar style={{backgroundColor: '#CC0814'}}
                  routeMapper={NavigationBarRouteMapper} />
            } />
      );
    }
    renderScene(route, navigator) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
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
  sdTitle(route, navigator, index, navState) {
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
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
