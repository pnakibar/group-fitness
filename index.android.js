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
  ScrollView,
  Dimensions
} from 'react-native';
const THUMBS = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '13',
  '13',
  '13',
]

const Thumb = ({ text }) => (
  <View style={styles.button}>
    <Text>
      {text}
    </Text>
  </View>
);

var createThumbRow = (text, i) => <Thumb key={i} text={text} />;
const HorizontalTable = ({ texts }) => {
  var _scrollView: ScrollView;
  console.log(texts);
  return (
    <View>
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        onScroll={() => { console.log('onScroll!'); }}
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
            navigationBar={
              <Navigator.NavigationBar style={{backgroundColor: '#CC0814'}}
                  routeMapper={NavigationBarRouteMapper} />
            } />
      );
    }
    renderScene(route, navigator) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
          <HorizontalTable texts={THUMBS} />
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
  scrollView: {
    backgroundColor: '#6A85B1',
    alignSelf: "stretch",
    width: Dimensions.get('window').width,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  img: {
    width: 64,
    height: 64,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
