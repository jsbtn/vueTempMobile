<template>
<div class="info">
  <van-nav-bar :title="route"  @click-left="$router.go(-1)" left-arrow >
  </van-nav-bar>
  <img v-if="$route.query.type != 1" src="../assets/error.png" class="img">
  <img v-else src="../assets/success.png" class="img">
  <p class="cours">{{info[$route.query.type]}}</p>
</div>
</template>
<script>
import {  NavBar } from 'vant';
export default {
  components:{
    'van-nav-bar':NavBar
  },
  name:"info",
  data(){
    return{
      info:[
        '已经拒绝您的访问申请',
        '提交成功，等待同意'
      ]
    }
  },
  computed:{
    route(){ return this.$route.meta.title }
  },
}
</script>
<style lang="scss" scoped>
  .info{
    text-align: center;
    height: 100vh;
    background: #fff;
    .img{
      margin-top: 100px;
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
    .cours{
      text-align: center;
      font-size: 32px;
      color: #666;
    }
  }
</style>