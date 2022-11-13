import { config } from '../../config/index';

import request from "../../utils/request";

/** 获取商品列表 */
function mockFetchGoodCategory() {
  const { delay } = require('../_utils/delay');
  const { getCategoryList } = require('../../model/category');
  return delay().then(() => getCategoryList());
}

/** 获取商品列表 */
export function getCategoryList(data) {
  return request(`/category/getCategoryList`, {
    method: 'POST',
    data,
  });
}
