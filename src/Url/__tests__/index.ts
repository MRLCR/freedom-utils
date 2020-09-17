import Url from '../index';

test('Url 实例化', () => {
  const src = 'https://image.baidu.com';
  const url = new Url(src);

  expect(url._url).toBe(src);
});

test('Url parse', () => {
  const protocol = "https";
  const path = 'image.baidu.com';
  const query = {x: '1', y: '2', z: '3'};
  const queryStr = Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');

  const src = `${protocol}://${path}`;
  const urlParsed = Url.parse(src);

  expect(urlParsed).toEqual(new Url(src).parse());

  expect(urlParsed.path).toEqual(path);
  expect(Object.keys(urlParsed.query).length === 0).toBeTruthy();
  
  const src1 = `${protocol}://${path}?${queryStr}`;
  const urlParsed1 = Url.parse(src1);
  expect(urlParsed1.path).toBe(path);
  expect(urlParsed1.query).toEqual(query);

  const src2 = `${path}?${queryStr}`;
  const urlParsed2 = Url.parse(src2);
  expect(urlParsed2.path).toBe(path);
  expect(urlParsed2.query).toEqual(query);

  expect(() => {
    Url.parse('');
  }).toThrow();
  expect(() => {
    Url.parse('http://');
  });
});

test('Url includeProtocol', () => {
  expect(Url.includeProtocol('http://www.baidu.com')).toBeTruthy();
  expect(Url.includeProtocol('https://www.baidu.com')).toBeTruthy();
  expect(Url.includeProtocol('www.baidu.com')).not.toBeTruthy();
  expect(Url.includeProtocol('www.baidu.com?target=https://image.baidu.com')).not.toBeTruthy();
});
