export const SELECT_DAY = 'SELECT_DAY';
export const SELECT_ACTIVITY = 'SELECT_ACTIVITY';

export function selectDay (date) {
  return {
    type: SELECT_DAY,
    date,
  };
};

export function selectActivity (activity) {
  return {
    type: SELECT_ACTIVITY,
    activity
  }
}
