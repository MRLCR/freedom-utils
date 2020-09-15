/**
 * 数据扁平化
 * @param arr 目标数
 * @param deep 扁平化深度 默认 0： 全部
 */
export function flatten(arr: any[], deep = 0): any[] {
  // 非数组对象
  if (!Array.isArray(arr)) {
    return [arr];
  }

  // 如果是高版本 直接调用
  if (arr.flat && typeof arr.flat === 'function') {
    return arr.flat(deep);
  }

  const _flatten = (originArr: any[], curDeep: number = 0): any[] => {
    if (!Array.isArray(originArr)) {
      return [originArr];
    }

    return originArr.reduce((pre, curItem) => {
      const canFlatten = (curDeep < deep || deep <= 0) && Array.isArray(curItem);
      const flattenedArr = canFlatten ? _flatten(curItem, curDeep + 1) : [curItem];
      return [...pre, ...flattenedArr];
    }, []);
  }

  return _flatten(arr);
}