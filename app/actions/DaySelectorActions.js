export const SELECT_DAY = 'SELECT_DAY';

export function selectDay (date) {
  return {
    type: SELECT_DAY,
    date,
  };
};
