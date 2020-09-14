interface anyObject {
  [prop: string]: any;
}

/**
 * 引用类型深拷贝
 * @param target 目标对象
 * @returns
 */
function deepCopy(target: anyObject) {
  const cache = new Map();

  const _deepCopy = (target: anyObject) => {
    // 数值类型直接返回
    if ((typeof target !== 'object') || !target) {
      return target;
    }

    // 正则处理
    // 考虑到 RegExp 下的属性均是默认的内置方法，一般会不推荐扩展和改写，所以便不处理
    if (target instanceof RegExp) {
      return target;
    }

    // 从缓存中查找
    if (cache.has(target)) {
      return cache.get(target);
    }

    const value: anyObject = Array.isArray(target) ? [] : {};
    
    // 递归遍历
    Object.keys(target).forEach((key) => {
      value[key] = _deepCopy(target[key]);
    });

    // 加入缓存
    cache.set(target, value);

    return value;
  }

  return _deepCopy(target);
}

export default deepCopy;
