import { toNumberOnePath , getLoginParams } from './common' 
import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (to.path == "/404") {
    next();
    return;
  }
  if (store.getters.token == "" || store.getters.token == null ) { // 首次登录
    if (to.matched.length != 0) {
      if (getLoginParams().token) {
        // await store.dispatch('login', getLoginParams());
        next();
      } else {
        next();
      };
    } else {
      next("404");
      return;
    }
  } else {
    if(to.matched.length == 0) { //乱跳转 
      next("404");
    }else{ 
      next();
    }
  }
})

router.afterEach(to => {
  NProgress.done()
})
