import binary from '../binary';
import { createRandNumArrSorted, randomNum } from '../../../tests/helper';
import { Search } from '../types';

const searchFactory = (name: string, search: Search) => ({
  name,
  search,
});

const searchLib = [
  searchFactory('二分查找', binary),
];

searchLib.forEach(({name, search}) => {
  const arr = createRandNumArrSorted(true, 30, 1001, 10);
  const randomIndex = randomNum(arr.length, 0);

  test(`${name}`, () => {
    const target = arr[randomIndex];

    expect(search(arr, target)).toBe(randomIndex);
  });

  test(`${name} 未找到元素的情况`, () => {
    expect(search(arr, 1)).toBe(-1);
  });

});
