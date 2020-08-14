/**
 * 下划线转换驼峰
 * @param {string} name 待转化的名称内容
 * @returns {string}
 */
const toHump = (name) => (
  name.replace(/\_(\w)/g, (all, letter) => (
    letter.toUpperCase()
  ))
);

/**
 * 驼峰转换下划线
 * @param {string} name 待转化的名称内容
 * @returns {string}
 */
const toLine = (name) => name.replace(/([A-Z])/g, "_$1").toLowerCase();

