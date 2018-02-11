/*
 * 通用接口操作模块
 * @Author: yinfxs 
 * @Date: 2017-09-02 08:41:11 
 * @Last Modified by: yinfxs
 * @Last Modified time: 2018-02-11 10:30:33
 */

import request from '../utils/request';
import { API_PREFIX } from '../utils/constants';
import { get, post, put, del } from './api';

/**
 * 调用模型默认列表查询接口
 * @param url
 * @param onError
 * @returns {Object}
 */
export function list({ url, onError }) {
  url = urlfix(url);
  return get({ url, onError });
}

/**
 * 调用模型默认ID查询接口
 * @param url
 * @param onError
 * @returns {Object}
 */
export function id({ url, onError }) {
  url = urlfix(url);
  return get({ url, onError });
}

/**
 * 调用模型默认新增接口
 * @param url
 * @param body
 * @param onError
 * @returns {Object}
 */
export function create({ url, body = {}, onError }) {
  url = urlfix(url);
  return post({ url, body, onError });
}

/**
 * 调用模型默认修改接口
 * @param url
 * @param body
 * @param onError
 * @returns {Object}
 */
export function update({ url, body = {}, onError }) {
  url = urlfix(url);
  return put({ url, body, onError });
}

/**
 * 调用模型默认删除接口
 * @param url
 * @param body
 * @param onError
 * @returns {Object}
 */
export function remove({ url, body = {}, onError }) {
  url = urlfix(url);
  return del({ url, body, onError });
}

/**
 * 请求默认模型接口带上前缀
 * @param url
 */
export function urlfix(url) {
  if (!url || url.startsWith('http')) return url;

  let correctUrl = url;
  if (url.startsWith('/')) {
    correctUrl = url.startsWith(API_PREFIX) ? url : `${API_PREFIX}${url}`;
  } else {
    correctUrl = `${API_PREFIX}/${url}`;
  }

  correctUrl = (__ORIGIN__ || '') + correctUrl;
  return correctUrl;
}