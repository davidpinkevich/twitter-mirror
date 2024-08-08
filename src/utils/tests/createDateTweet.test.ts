import { getTime } from 'utils/createDateTweet';

describe('get time', () => {
  test('14:38', () => {
    expect(getTime(1723117088612)).toBe('14:38 Aug 8');
  });

  test('14:43', () => {
    expect(getTime(1723117433739)).toBe('14:43 Aug 8');
  });
});
