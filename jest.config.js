const config = {
  transform: {
    '^.+\\.ts': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
}

module.exports = config;
