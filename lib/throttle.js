/**
 * 节流函数
 * @param {function} fn 要执行的函数
 * @param {number} interval 节流持续时间
 * @returns {function}
 */
function throttle(fn, interval = 300) {
  let canRun = true;
  return function () {
      if (!canRun) return;
      canRun = false;
      setTimeout(() => {
          fn.apply(this, arguments);
          canRun = true;
      }, interval);
  };
}