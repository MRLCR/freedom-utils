/**
 * 数据扁平化
 * @param {Array} arr 目标数
 * @param {number} deep 扁平化深度 默认 0： 全部
 * @returns {Array}
 */
function flatten(arr, deep = 0) {

  // 如果是高版本 直接调用
  if (Array.prototype.flat) {
    return arr.flat(deep);
  }

  const _flatten = (originArr, curDeep = 0) => {
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
