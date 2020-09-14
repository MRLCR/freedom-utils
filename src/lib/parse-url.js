/**
 * 解析路由参数
 * @param {string} url 路由
 * @returns {object}
 */
function parseUrl(url){
  const res = { path: '', query: '', };
  const query = url.split("?")[1];
  if (!query) {
    res.path = url;
    return res;
  }

  const queryArr = query.split("&");
  queryArr.forEach((item) =>{
    const [key, value] = item.split('=');
    if (key) {
      res.query[key] = value;
    }
  });
  return res;
}
