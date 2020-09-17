import debounce from '../debounce';
import deepCopy from '../deep-copy';
import throttle from '../throttle';

import { randomNum } from '../../../tests/helper';

test('防抖函数', async () => {
  let count = 0;
  const add = debounce(() => count++);

  const timer = setInterval(() => add(), 100);

  await new Promise((resolve) => {
    setTimeout(() => {
      clearInterval(timer);
      resolve();
    }, 1000);
  })

  expect(count).toBe(0);

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  })

  expect(count).toBe(1);
});

test('节流', async () => {
  let count = 0;
  const add = throttle(() => count++);

  const timer = setInterval(() => add(), 100);

  const num = randomNum(6, 2);

  await new Promise((resolve) => {
    setTimeout(() => {
      clearInterval(timer);
      resolve();
    }, num * 300);
  })

  expect(count).toBe(num - 1);
});

test('深拷贝', () => {
  const obj = {x: 1, y: 2};
  const copy = deepCopy(obj);

  expect(copy).not.toBe(obj);
  expect(copy).toMatchObject(obj);

  copy.x = 3;
  expect(copy.x).toBe(3);
  expect(obj.x).toBe(1);

});
