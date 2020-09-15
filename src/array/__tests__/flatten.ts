import { flatten } from '../index';

test('数组扁平化', () => {
  expect(
    flatten(
      [1, 2, [3, 4], [5]]
    )
  ).toEqual(
    [1, 2, 3, 4, 5]
  )
});

test('扁平化一层', () => {
  expect(
    flatten(
      [1, [[2, 3], [4, 5]], [6, 7], [[[8]]]],
      1,
    )
  ).toEqual(
    [1, [2, 3], [4, 5], 6, 7, [[8]]],
  );
});

test('数组包含非数字内容', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  const set = new Set([6, 7, 9]);

  expect(
    flatten(
      [null, undefined, { x: 1, y: 2, }, [3, 4], ['5', true], map, set, [map, set]],
    )
  ).toEqual(
    [null, undefined, { x: 1, y: 2 }, 3, 4, '5', true, map, set, map, set],
  )
});

test('空数组', () => {
  expect(
    flatten([])
  ).toEqual(
    []
  );
});
