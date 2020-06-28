<template>
  <div class="page">
      <div class="tabBar">
        <van-icon color="#333" :size="24" name="arrow-left" />
      </div>
      <div class="form">
        <h3 class="_title">登录</h3>
        <div class="inputBox">
            <!-- <img class="icon" src="../assets/icon/phone.png" /> -->
            <input v-model="loginQuery.email" class="input" minlength="14" placeholder="请输入账号" type="text"/>
        </div>
        <div class="inputBox">
            <!-- <img class="icon" src="../assets/icon/password.png" /> -->
            <input v-model="loginQuery.password" class="input" maxlength="16" placeholder="请输入密码" type="password"/>
        </div>
        <div class="flex-sb info-log">
          <span>忘记密码?</span>
          <span>注册</span>
        </div>
        <div @click="login" noPlain class="big_btn">登录</div>
      </div>
  </div>
</template>

<script>
import { NavBar, Form, Field, Button , Icon , Notify  ,Toast} from 'vant';
import { emailLogin } from '@/api';
import { verify } from '@/utils/common'
export default {
  name: 'home',
  components: {
    'van-nav-bar': NavBar,
    'van-form': Form,
    'van-field': Field,
    'van-button': Button,
    'van-icon':Icon,
  },
  data() {
    return {
      loginQuery:{
        email:"1@qq.com", 
        password:"a123456789"
      }
    };
  },
  mounted() {
  },
  methods: {
    getList(){
      let params = {}
    },
    login(){
      this.$router.replace({
        path:"/home"
      })
    }
  },
};

</script>
<style lang="scss" scoped>
  .page{
    height: 100vh;
    background-position: center;
    background-size: 100% 100%;
    background-image: url('../assets/icon/loginbg.png');
    .form{
      width: 585px;
      margin: 0 auto;
      ._title{
        color: #000;
        font-size: 0.44rem;
        text-align: center;
        padding-top:1.5rem;
        margin-bottom: 0.5rem;
      }
      .inputBox{
        position: relative;
        background-color: #F0F0F0;
        width:100%;
        border-radius: 0.45rem;
        padding-left: 0.5rem;
        margin-bottom: 0.3rem;
        .icon{
          position: absolute;
          top:0.25rem;
          left: 0.32rem;
          width: 0.23rem;
        }
        .input{
          height: 0.8rem;
          line-height: 0.8rem;
          padding:0 0.25rem;
          font-size: 0.28rem;
          color: #333;
          background-color: transparent;
          width: 100%;
          &::placeholder{
            color: #999;
          }
        }
      }
      .info-log{
        margin-top: 0.1rem;
        color: #F6BE14;
        font-size: 0.24rem;
      }
      .big_btn{
        margin-top: 1rem;
        color: #fff;
      }
    }
    .tabBar{
      height: 0.88rem;
      line-height: 0.88rem;
      padding-left: 0.3rem;
      padding-top: 0.28rem;
    }
  }
</style>
