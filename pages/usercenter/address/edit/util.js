let addressPromise = [];

import request from "../../../../utils/request";

/** 地址编辑Promise */
export const getAddressPromise = () => {
  let resolver;
  let rejecter;
  const nextPromise = new Promise((resolve, reject) => {
    resolver = resolve;
    rejecter = reject;
  });

  addressPromise.push({
    resolver,
    rejecter
  });

  return nextPromise;
};

/** 用户保存了一个地址 */
export const resolveAddress = (data) => {
  // const allAddress = [...addressPromise];
  // addressPromise = [];
  // allAddress.forEach(({ resolver }) => resolver(address));
  return request(`/v1/addressAdd`, {
    method: 'POST',
    data,
  });
  // console.info('用户保存了一个地址', address);


};

/** 取消编辑 */
export const rejectAddress = () => {
  const allAddress = [...addressPromise];
  addressPromise = [];

  allAddress.forEach(({
    rejecter
  }) => rejecter(new Error('cancel')));
};