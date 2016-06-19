import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { BackAndroid } from 'react-native';

import ActivitiesListContainer from '../containers/ActivitiesListContainer'
import ActivitySelectedContainer from '../containers/ActivitySelectedContainer'

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
