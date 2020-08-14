/**
 * 引用类型深拷贝
 * @param {object} target 目标对象
 * @returns {object}
 */
function deepCopy(target) {
  const cache = [];

  const _deepCopy = (target) => {
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
    const cacheItem = cache.find((item) => item.target === target);
    if (cacheItem) {
      return cacheItem.value;
    }

    const value = Array.isArray(target) ? [] : {};
    
    // 递归遍历
    Object.keys(target).forEach((key) => {
      value[key] = _deepCopy(target[key]);
    });

    // 加入缓存
    cache.push({
      target, 
      value,
    });

    return value;
  }
  return _deepCopy(target);
}


// 测试代码

const originObj = {
  a: 1,
  b: /\*.md/,
  c() {
    return 'Copy Fn';
  },
  d: {
    a: 1,
    c: null,
  },
  e: [1, 2, 3, 4, 5],
  t: new RegExp('a'),
}

const newObj = deepCopy(originObj);
newObj.a = 'test';
newObj.t = /b/;

console.log(originObj);
console.log(newObj);
