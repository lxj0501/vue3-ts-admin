export const is = (val: unknown, type: 'String') =>
  Object.prototype.toString.call(val) === `[object ${type}]`

export const isString = (val: unknown) => is(val, 'String')
