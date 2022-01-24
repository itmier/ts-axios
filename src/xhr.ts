/*
 * @Author: 王云飞
 * @Date: 2022-01-20 14:59:09
 * @LastEditTime: 2022-01-20 15:12:13
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import { AxiosRequestConfig } from './types'
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
