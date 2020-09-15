import bubble from '../bubble';
import insertion from '../insertion';
import merge from '../merge';
import quick from '../quick';
import selection from '../selection';
import shell from '../shell';

interface Sort {
  (arr: number[]): number[];
}

const createRandNumArr = (len: number = 30, max: number = 1000): number[] => {
  const res: number[] = [];

  const randomNum = (): number => Math.floor(Math.random() * max);

  for(let i = 0; i < len; i++) {
    res[i] = randomNum();
  }

  return res;
}

const isSorted = (arr: number[]) => arr.every((item, index) => index === 0 || item >= arr[index]);

const sortFactory = (name: string, sort: Sort) => ({
  name,
  sort,
});
const sortLib = [
  sortFactory('冒泡排序', bubble),
  sortFactory('简单插入排序', insertion),
  sortFactory('二路归并排序', merge),
  sortFactory('快排', quick),
  sortFactory('选择排序', selection),
  sortFactory('希尔排序', shell),
];

sortLib.forEach(({name, sort}) => {
  test(`${name}`, () => {
    const origin: number[] = createRandNumArr();

    expect(isSorted(sort(origin))).toBeTruthy();
  });

  test(`${name} 边界测试: 空数组`, () => {
    expect(sort([])).toEqual([]);
  });
});
