import updateManager from './common/updateManager';

import {  reqLogin} from "./services/login/index";

App({
  globalData:{    
    token:'',    

} ,

  onLaunch: function () {
    this.handleLogin()
  },
  onShow: function () {
    updateManager();
  },

   async handleLogin(){
     const res=  await reqLogin({ "username": "admin", "password": "admin"})
     if (res.code===200) {
      wx.setStorageSync('token',res.token)

     }
   }

});
