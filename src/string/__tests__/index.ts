import { toHump, toLine } from '../index';

test('下划线转换驼峰', () => {
  const str = 'aa_bb_cc';
  expect(toHump(str)).toBe('aaBbCc');

  const str1 = 'a_b_c';
  expect(toHump(str1)).toBe('aBC');

  const str2 = '_a_b_c';
  expect(toHump(str2)).toBe('ABC');

  const str3 = 'a_b_c_';
  expect(toHump(str3)).toBe('aBC_');
  
  const empty = '';
  expect(toHump(empty)).toBe('');
});

test('驼峰转换下划线', () => {
  const str = 'aaBbCc';
  expect(toLine(str)).toBe('aa_bb_cc');

  const str1 = 'aBC';
  expect(toLine(str1)).toBe('a_b_c');

  const str2 = 'ABC';
  expect(toLine(str2)).toBe('_a_b_c');

  const empty = '';
  expect(toLine(empty)).toBe('');
});
