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
  TouchableOpacity
} from 'react-native';

const Main = () => (
  <View style={styles.container}>
    <Text>
      Main!
    </Text>
  </View>
)

const Home = () => (
    <Text>
      Home!
    </Text>
)

const TopBar = ({navigator, navState}) => (
  <Text> AUSHDUAHSUHDUHD </Text>
)

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          返回
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          主页
        </Text>
      </TouchableOpacity>
    );
  }
};

class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'Home', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
   }
  renderScene(route, navigator) {
    var routeId = route.id;
    switch (route.id) {
      case ('Home'):
        return <Home navigator={navigator} />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width: 100,
    height: 100,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
