const { List, Map } = require('immutable');
import { CHANGE_SCENE } from '../actions/NavigationActions';
import { combineReducers } from 'redux-immutable';

const initialState = Map({
  scene: '',
})

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCENE:
      return state.set('scene', action.scene);
    default:
      return state;
  }
}

export default navigationReducer;
