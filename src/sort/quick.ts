import { Sort } from './types/index'

/**
 * 数组分区排序
 * @param arr 数据源
 * @param left 左边界
 * @param right 有边界
 * @returns 区域的分界点
 */
function partition(arr: number[], left: number, right: number): number {
  // 设定基准值（pivot）
  const pivot = left;
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

/**
 * 交互数组中某两个值的位置
 * @param arr 数据源
 * @param i 序号1
 * @param j 序号2
 */
function swap(arr: number[], i: number, j: number): void {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
}

/**
 * 快排核心算法
 * @param arr 待排序是数组
 * @param left 左边距
 * @param right 右边界
 * @returns 排序好的数组
 */
function quickSortCore(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
  let partitionIndex: number;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSortCore(arr, left, partitionIndex - 1);
    quickSortCore(arr, partitionIndex + 1, right);
  }
  return arr;
}

/**
 * 快排
 */
const quickSort:Sort = function(arr) {
  return quickSortCore(arr, 0, arr.length - 1);
}

export default quickSort;
