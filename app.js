import updateManager from './common/updateManager';

import {  reqLogin} from "./services/login/index";

App({
  onLaunch: function () {
    this.handleLogin()
  },
  onShow: function () {
    updateManager();
  },

   async handleLogin(){
     const res=  await reqLogin({
        "username": "admin",
        "password": "admin"
    }
     

    )
   }

});
