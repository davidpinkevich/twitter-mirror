import { stringDate } from 'utils/getDateValues';

describe('inpute birthday date', () => {
  test('valid date', () => {
    expect(stringDate({ month: '3', day: '3', year: '83' })).toBe('04.04.2013');
  });
  test('valid date', () => {
    expect(stringDate({ month: '3', day: '3', year: '85' })).toBe('04.04.2015');
  });
});
