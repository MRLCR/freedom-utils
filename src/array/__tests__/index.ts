import { flatten } from '../index';

test('flatting array deep 1', () => {
  expect(
    flatten([1, 2, [3, 4], [5]])
  ).toEqual(
    [1, 2, 3, 4, 5]
  )
});
