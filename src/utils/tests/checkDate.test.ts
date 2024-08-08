import { checkDate } from 'utils/checkDate';

describe('inpute birthday date', () => {
  test('valid date', () => {
    expect(checkDate({ month: '2', day: '2', year: '93' })).toBe(true);
  });

  test('without day', () => {
    expect(checkDate({ month: '2', day: '', year: '93' })).toBe(false);
  });

  test('without year', () => {
    expect(checkDate({ month: '2', day: '12', year: '' })).toBe(false);
  });

  test('without month', () => {
    expect(checkDate({ month: '', day: '12', year: '94' })).toBe(false);
  });
});
