/*
 * @Author: 王云飞
 * @Date: 2022-01-20 14:51:58
 * @LastEditTime: 2022-01-20 14:57:47
 * @LastEditors: 王云飞
 * @Description:
 *
 */
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
