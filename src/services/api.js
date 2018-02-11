/*
 * 通用接口操作模块
 * @Author: yinfxs 
 * @Date: 2017-09-02 08:41:11 
 * @Last Modified by: yinfxs
 * @Last Modified time: 2018-02-11 10:33:37
 */

import request from '../utils/request';

/**
 * 常规GET请求
 * @param url
 * @returns {Object}
 */
export function get({ url, options, onError }) {
  return request({ url, options, onError });
}

/**
 * 常规POST请求
 * @param url
 * @param onError
 * @returns {Object}
 */
export function post({ url, body, options, onError }) {
  return request({
    url,
    options: Object.assign(options || {}, {
      method: 'POST',
      body: JSON.stringify(body, null, 0),
    }),
    onError,
  });
}

/**
 * 常规PUT请求
 * @param url
 * @param onError
 * @returns {Object}
 */
export function put({ url, body, options, onError }) {
  return request({
    url,
    options: Object.assign(options || {}, {
      method: 'PUT',
      body: JSON.stringify(body, null, 0),
    }),
    onError,
  });
}

/**
 * 常规DELETE请求
 * @param url
 * @param onError
 * @returns {Object}
 */
export function del({ url, body, options, onError }) {
  return request({
    url,
    options: Object.assign(options || {}, {
      method: 'DELETE',
      body: JSON.stringify(body, null, 0),
    }),
    onError,
  });
}