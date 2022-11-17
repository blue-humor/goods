import {
  config
} from '../../config/index';

import request from "../../utils/request";

/** 获取商品列表 */
function mockFetchGood(ID = 0) {
  const {
    delay
  } = require('../_utils/delay');
  const {
    genGood
  } = require('../../model/good');
  return delay().then(() => genGood(ID));
}

/** 获取商品列表 */
export function fetchGood(data) {
  return request(`/goods/getDetail`, {
    method: 'POST',
    data,
  });
}

//加入购物车
export function arrGood(data) {
  return request(`/v1/addToShoppingcart`, {
    method: 'POST',
    data,
  });
}