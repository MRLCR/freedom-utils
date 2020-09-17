/**
 * 防抖
 * @param fn 要执行的函数
 * @param interval 防抖延时时间
 * @returns
 */
function debounce(fn: () => any, interval: number = 300): () => any {
  let timeout: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply<any, any>(args);
    }, interval);
  };
}

export default debounce;
