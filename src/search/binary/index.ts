/**
 * 二分查找
 */
function binarySearch(arr: number[] | string[], target: number | string): number {
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
