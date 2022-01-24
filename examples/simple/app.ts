/*
 * @Author: 王云飞
 * @Date: 2022-01-20 15:19:33
 * @LastEditTime: 2022-01-20 15:34:44
 * @LastEditors: 王云飞
 * @Description: 
 * 
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})