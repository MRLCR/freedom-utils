/**
 * 冒泡排序
 */
function bubbleSort(arr: number[]): number[] {
  const len = arr.length;
  const swap = (i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]];

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {

      // 相邻元素两两对比
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }

    }
  }

  return arr;
}

export default bubbleSort;
