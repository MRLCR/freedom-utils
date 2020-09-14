/**
 * 希尔排序
 */
export function shellSort(arr: number[]) {
  const len = arr.length;
  const getGap = (num: number): number => Math.floor(num / 2);

  for (let gap = getGap(len); gap > 0; gap = getGap(gap)) {

    for (let i = gap; i < len; i++) {
      const current = arr[i];
      let j = i;

      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }

      arr[j] = current;
    }

  }

  return arr;
}