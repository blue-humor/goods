import request from "../../utils/request";

export async function reqLogin(data, options) {
  return request(`/member/login`, {
    method: 'POST',
    data,
  });
}
