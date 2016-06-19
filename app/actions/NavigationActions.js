import ActivitiesListContainer from '../containers/ActivitiesListContainer'
import ActivitySelectedContainer from '../containers/ActivitySelectedContainer'
export const CHANGE_SCENE = 'CHANGE_SCENE';

export function changeScene (scene) {
  return {
    type: changeScene,
    scene
  }
}

export function changeSceneActivitiesListContainer () {
  return changeScene(<ActivitiesListContainer/>)
}

export function changeSceneActivitySelectedContainer () {
  return changeScene(<ActivitySelectedContainer/>)
}
