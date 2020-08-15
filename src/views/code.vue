<template>
  <div></div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
    };
  },
  computed:{
    ...mapState({
      appList: state => state.appList
    })
  },
  created() {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var href = ''
    let type = this.$route.query.type
    if(isAndroid){
     href = this.appList[type].apk 
    }
    if(isIOS){
     href = this.appList[type].ios 
    }
    window.location.href = href 
  }
};
</script>