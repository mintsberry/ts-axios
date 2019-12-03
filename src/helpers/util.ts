const toString = Object.prototype.toString
export function isData(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObjct(val: any): val is Object {
  return val != null && typeof val === 'object'
}

export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}