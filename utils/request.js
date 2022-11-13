var app = getApp(); //引入全局app.js，我们可以在globalData中定义一些公用的数据，比如baseUrl、token

const baseUrl = 'http://121.4.166.61:8080/api-ordering'


const request = function (url, options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: options.method,
      data: JSON.stringify(options.data),
      header: {
        'token': wx.getStorageSync('token')
      },
      success: (res) => {
        return resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

export default request