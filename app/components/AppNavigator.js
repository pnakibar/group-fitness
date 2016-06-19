import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

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
