/**
 * 冒泡排序
 * @param {Array} arr 待排序的数组
 * @param {Array}
 */
export function bubbleSort(arr) {
  const len = arr.length;
  const change = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {

      // 相邻元素两两对比
      if (arr[j] > arr[j + 1]) {
        change(j, j + 1);
      }

    }
  }
  return arr;
}
