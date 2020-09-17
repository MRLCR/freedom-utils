/**
 * 节流函数
 * @param fn 要执行的函数
 * @param interval 节流持续时间
 * @returns
 */
function throttle(fn: () => any, interval: number = 300): () => any {
  let canRun = true;
  return function (...args: any[]) {
      if (!canRun) return;
      canRun = false;
      setTimeout(() => {
          fn.apply<any, any>(args);
          canRun = true;
      }, interval);
  };
}

export default throttle;
