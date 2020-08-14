/**
 * 防抖
 * @param {function} fn 要执行的函数
 * @param {number} interval 防抖延时时间
 * @returns {function}
 */
export function debounce(fn, interval = 300) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
}
