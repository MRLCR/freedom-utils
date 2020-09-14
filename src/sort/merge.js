/**
 * 两个数组归并操作
 * @param {Array} left 
 * @param {Array} right 
 * @returns {Array}
 */
export function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

/**
 * 二路归并排序
 * @param {Array} arr 待排序的数组
 * @param {Array}
 */
export function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
