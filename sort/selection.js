function selectionSort(arr) {
  const len = arr.length;
  let minIndex = 0;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
        minIndex = j;                 // 将最小数的索引保存
      }
    }
    [
      arr[i],
      arr[minIndex],
    ] = [
      arr[minIndex],
      arr[i],
    ]
  }
  return arr;
}

module.exports = selectionSort;
