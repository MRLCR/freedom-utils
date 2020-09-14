function partition(arr, left, right) {     // 分区操作
  const pivot = left;                      // 设定基准值（pivot）
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

function swap(arr, i, j) {
  [
    arr[i],
    arr[j],
  ] = [
    arr[j],
    arr[i],
  ];
}

function quickSort(arr, left, right) {
  const len = arr.length;
  const partitionIndex;
  const left = typeofleft != 'number' ? 0 : left;
  const right = typeofright != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

module.exports = quickSort;
