const bubbleSort = require('./bubble');
const selectionSort = require('./selection');
const insertionSort = require('./insertion');

const ORIGIN_ARR = [1, 3, 2, 4, 7, 5, 9, 10, 8, 7, 6];
const EXPORT_ARR = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];

const sorts = [];

const sortFantory = (name, fn) => {
  sorts.push({
    name,
    fn,
  })
};

sortFantory('bubbleSort', bubbleSort);
sortFantory('selectionSort', selectionSort);
sortFantory('insertionSort', insertionSort);

const isSameArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
}

const check = () => {
  sorts.forEach((item) => {
    const res = item.fn(ORIGIN_ARR);
    if (!isSameArr(res, EXPORT_ARR)) {
      console.log(`${item.name} 排序错误: ${res}`);
      console.log('-----------');
    }
  });
  console.log('检查完成');
}

check();
