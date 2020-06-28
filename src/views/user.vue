<template>
  <div class='page'>
    <div class="tc c3 title">我的</div>
    <div class="userBanner flex">
        <img src=".././assets/icon/defulutUser.png" class="userImg" />
        <span class="userName">秋天的树叶</span>
    </div>
    <div @click="layOut" class="big_btn">退出登录</div>
  </div>
</template>

<script>
import { NavBar, Form, Field, Button , Icon , Toast} from 'vant';
export default {
  name: 'home',
  components: {
    'van-nav-bar': NavBar, 
    'van-form': Form,
    'van-field': Field,
    'van-icon':Icon,
    'van-button': Button,
  },
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {
    getList(){
      let params = {}
    },
    selfToPath(type){
      this.$router.push({
        path:"/userFocus",
        query:{
          type
        }
      })
    },
    layOut(){
      this.$router.push({
        path:"/"
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.page{
  height: 100%;
}
.userBanner{
  background-color: #fff;
  height: 2.5rem;
  background-image: url('../../src/assets/icon/userbg.png');
  background-size: 95%;
  background-position: center;
  background-repeat: no-repeat;
  padding:0.1rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.1rem solid #F8F8F8;
}
.userImg{
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  margin-left: 0.65rem;
  margin-right: 0.36rem;
}
.userName{
  font-size: 0.36rem;
  color: #333;
}
.iconimg{
  display: inline-block;
  width: 0.7rem;
  height: auto;
  border-radius: 100%;
  margin-right: 0.2rem;
}
.len_row{
  background-color: #fff;
  padding:0.2rem 0.2rem;
  border-bottom: 0.2rem solid #F8F8F8;
  &:last-child{
    border-bottom: 100px solid #F8F8F8;
  }
}
.big_btn{
  display:block;
  margin: 0 auto; 
  margin-top: 3.7rem;
}
</style>
