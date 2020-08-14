function parseUrl(url){
  const res = {};
  const query = url.split("?")[1];
  if (!query) {
    return res;
  }

  const queryArr = query.split("&");
  queryArr.forEach((item) =>{
    const [key, value] = item.split('=');
    if (key) {
      res[key] = value;
    }
  });
  return res;
}

const testUrl = 'www.baidu.com';

console.log(parseUrl(testUrl));
