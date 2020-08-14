// 下划线转换驼峰
const toHump = (name) => (
  name.replace(/\_(\w)/g, (all, letter) => (
    letter.toUpperCase()
  ))
)
// 驼峰转换下划线
const toLine = (name) => name.replace(/([A-Z])/g, "_$1").toLowerCase();

console.log(toHump('_aa_bb'))
