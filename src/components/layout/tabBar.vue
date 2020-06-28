<template>
  <div v-if="active != null" class="flex-sb tabarList">
    <div  
      @click="toPath(item.path)" 
      v-for="(item,index) in tabBars" 
      :key="index" 
      :class=" thisPage == item.meta.active ? 'dib row-col-4 tc tabBar active'  : ' dib row-col-4 tc tabBar'"
    >
      <img class="img nome" :src="require('@/assets/icon/'+item.meta.icon+'.png')" />
      <img class="img img-active" :src="require('@/assets/icon/'+item.meta.icon+'-act.png')" />
      <p class="_name">{{item.meta.title}}</p>
    </div>
  </div>
</template>
<script>
import { tabBars } from "@/router/tabBarRouter"
export default {
  name:"tabBar",
  data(){
    return {
      tabBars:[]
    }
  },
  computed:{
    thisPage(){
      return this.$route.path
    },
    active(){
      return this.$route.meta.active || null
    }
  },
  created(){
    this.tabBars = tabBars
  },
  methods:{
    toPath(path){
      if(path == this.thisPage){
        return
      }
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.tabarList{
  padding: 15px 0px 0.1rem 0px;
  box-shadow: 0px 0px 10px #DCE8F6;
  background-color: #fff;
  .tabBar{
    flex:1;
    .img{
      width: 0.45rem;
      height: auto;
      max-height: 0.45rem;
    }
    .img-active{
      display: none;
    }
  }
  .active{
    .img-active{
      display: inline-block;
    }
    .nome{
      display: none;
    }
    ._name{
      color: #F9BA41;
    }
  }
  ._name{
    color: #484354;
    margin-top: -0.08rem;
    font-size: 0.22rem;
  }
}
</style>