
interface UrlQuery {
  [props: string]: any;
}

interface ParseUrl {
  path: string;
  query: UrlQuery;
  protocol?: string;
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

  /**
   * 是否包含请求协议
   * @param url 路由
   */
  static includeProtocol(url: string): boolean {
    return /^https?:\/\/(.*)/.test(url);
  }

  /**
   * 解析路由
   * @param url 路由
   */
  static parse(url: string): ParseUrl {
    if (url === '') {
      throw Error('Illegality url');
    }

    let _url: string;

    if (Url.includeProtocol(url)) {
      const match = url.match(/^https?:\/\/(.*)/);

      if (!match) {
        throw Error('Illegality url');
      }

      _url = match[1];
    } else {
      _url = url;
    }

    const res: ParseUrl = { path: '', query: {} };
    const [path, query] = _url.split("?");

    res.path = path;

    if (!query) {
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