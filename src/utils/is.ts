const toString = Object.prototype.toString

export const is = (val: unknown, type: 'String') =>
  toString.call(val) === `[object ${type}]`

export const isString = (val: unknown) => is(val, 'String')
