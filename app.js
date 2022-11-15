import updateManager from './common/updateManager';

import {  reqLogin} from "./services/login/index";

App({
  globalData:{    
    token:'',    
} ,

  onLaunch: function () {
    // this.handleLogin()
  },
  onShow: function () {
    updateManager();
  },


});
