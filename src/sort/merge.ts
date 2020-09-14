/**
 * 两个数组归并操作
 * @param {Array} left 
 * @param {Array} right 
 * @returns {Array}
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  while (left.length > 0 && right.length > 0) {
    const num = left[0] <= right[0] ? left.shift() : right.shift();
    num && result.push(num);
  }

  while (left.length) {
    const num = left.shift();
    num && result.push();
  }

  while (right.length) {
    const num = right.shift();
    num && result.push(num);
  }

  return result;
}

/**
 * 二路归并排序
 */
function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
