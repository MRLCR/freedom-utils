/**
 * 选择排序
 * @param {Array} arr 待排序的数组
 * @returns {Array}
 */
export function selectionSort(arr) {
  const len = arr.length;
  const swap = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

  let minIndex = 0;

  for (let i = 0; i < len - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swap(i, minIndex);

  }

  return arr;
}
