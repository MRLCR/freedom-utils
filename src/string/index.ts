/**
 * 下划线转换驼峰
 * @returns
 */
export const toHump = (name: string): string => (
  name.replace(/\_(\w)/g, (all, letter) => (
    letter.toUpperCase()
  ))
);

/**
 * 驼峰转换下划线
 */
export const toLine = (name: string) => name.replace(/([A-Z])/g, "_$1").toLowerCase();

