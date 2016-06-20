import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { BackAndroid } from 'react-native';

import ActivitiesScreenContainer from '../containers/ActivitiesScreenContainer'
import ActivitySelectedContainer from '../containers/ActivitySelectedContainer'

export default class App extends Component {
  componentWillMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());
  };
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="activitiesScreen" component={ActivitiesScreenContainer} initial={true} />
          <Scene key="activityScreen" component={ActivitySelectedContainer} />
        </Scene>
      </Router>
    )
  }
}
