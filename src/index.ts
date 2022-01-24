/*
 * @Author: 王云飞
 * @Date: 2022-01-20 14:49:21
 * @LastEditTime: 2022-01-24 18:52:30
 * @LastEditors: 王云飞
 * @Description:
 *
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { bulidURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

export default axios
