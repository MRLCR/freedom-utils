import { Search } from './types/index';

/**
 * 二分查找 有序数组
 */
const binarySearch: Search = function(arr, target) {
  if (!Array.isArray(arr)) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return mid;
    }

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export default binarySearch;
