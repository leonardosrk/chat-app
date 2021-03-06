const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', ()=> {
  it('should reject non-string values', () => {
    var value = 123456789;
    expect(isRealString(value)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var value = '           ';
    expect(isRealString(value)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var value = '   Leonardo  ';
    expect(isRealString(value)).toBe(true);
  });
});
