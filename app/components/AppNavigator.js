import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  TouchableHighlight,
  BackAndroid
} from 'react-native';

/*
BackAndroid.addEventListener('hardwareBackPress', function() {
     if (!this.onMainScreen()) {
       Actions.pop();
       return true;
     }
    Actions.pop();
    console.log(Actions)
    return true
});
*/

import ActivitiesListContainer from '../containers/ActivitiesListContainer'
import ActivitySelectedContainer from '../containers/ActivitySelectedContainer'

const Sample = () => (
  <View>
    <Text>
      HI!
    </Text>
  </View>
)

export default class App extends Component {
  componentWillMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());
  };
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="activitiesList" component={ActivitiesListContainer} initial={true} />
          <Scene key="activitySelected" component={ActivitySelectedContainer} />
        </Scene>
      </Router>
    )
  }
}
