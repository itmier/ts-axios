/*
 * @Author: 王云飞
 * @Date: 2022-01-21 09:46:36
 * @LastEditTime: 2022-01-21 10:16:45
 * @LastEditors: 王云飞
 * @Description:
 *
 */
const toString = Object.prototype.toString
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
