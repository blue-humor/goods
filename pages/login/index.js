// const WXAPI = require('../../wxapi/index');

import {
  reqLogin
} from "../../services/login/index";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 点击取消授权
  cancelAuth() {
    wx.switchTab({
      url: '../index/index'
    })
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: '完善个人资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (newWes) => {
        let userInfo = newWes.userInfo
        wx.setStorageSync('userInfo', userInfo)

        wx.login({
          success(res) {
            let code = res.code
            if (code) {
              wx.showLoading({
                title: '加载中',
              })
              reqLogin({
                "username": "admin",
                "password": "admin"
              }).then((res) => {
                  wx.setStorageSync('token', res.token)
                  wx.hideLoading({})
                  wx.switchTab({ url: '/pages/home/home' });
                },
                (reason) => {
                  wx.hideLoading({})
                  console.error(reason); // Error!
                },
              )

              // WXAPI.userApi.getToken({
              //   userInfo,
              //   code
              // }, 'POST').then((res) => {
              //   console.log(res)
              //   wx.setStorageSync('authFlag', true)
              //   wx.setStorageSync('token', res.access_token)
              //   wx.navigateBack({
              //     delta: 1
              //   })
              // }, (err) => {
              //   console.log(err)
              // }).finally(() => {
              //   wx.hideLoading({})
              // })
            }
          }
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})