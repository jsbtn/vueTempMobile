<template>
  <div id="app">
    <div class="content tl ovf">
      <router-view />
    </div>
    <div v-if="active" style="height:1.12rem;"></div> 
    <div class="flexd">
      <tabBar></tabBar>
    </div>
  </div>
</template>
<script>
import tabBar  from "@/components/layout/tabBar"
import { setRem } from '@/utils/common'
export default {
  name:"list",
  components:{
    tabBar
  },
  data(){
    return {
      
    }
  },
  computed:{
    active(){
      return this.$route.meta.active || null
    }
  },
  mounted(){
    // 设置本机rem;
    setRem();
  }
}
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    font-size: 24px;
  }
  html,body{
    min-height: 100vh;
    background-color: #F8F8F8 !important;
  }
  .content{
    height: 100%;
  }
  .flexd{
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 999;
  }
</style>
