import {
  config
} from '../../config/index';

import request from "../../utils/request";

/** 获取购物车mock数据 */
function mockFetchCartGroupData(params) {
  const {
    delay
  } = require('../_utils/delay');
  const {
    genCartGroupData
  } = require('../../model/cart');

  return delay().then(() => genCartGroupData(params));
}

/** 获取购物车数据 */
export function fetchCartGroupData(data) {
  return request(`/queryByMemberId/shoppingcart`, {
    method: 'POST',
    data,
  });
}