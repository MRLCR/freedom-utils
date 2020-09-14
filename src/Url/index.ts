
interface UrlQuery {
  [props: string]: any;
}

interface ParseUrl {
  path: string;
  query: UrlQuery;
}

interface UrlInterface {
  readonly _url: string;
  parse(): ParseUrl;
}


/**
 * Url 相关处理
 */
class Url implements UrlInterface {
  readonly _url: string;

  constructor(str: string) {
    this._url = str;
  }

  parse() {
    return Url.parse(this._url);
  }

  static parse(url: string): ParseUrl {
    const res: ParseUrl = { path: '', query: {} };
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
}

export default Url;