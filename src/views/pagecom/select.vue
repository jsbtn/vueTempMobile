<template>
  <div class="container" ref="container">
    <van-sticky :container="container">
      <van-nav-bar :title="route" @click-left="close" left-arrow >
          <template #right>
          <span @click="dmo">  确定 </span>
          </template>
      </van-nav-bar>
    </van-sticky>
    <van-search 
      @search="onSearch"
      @cancel="onCancel"
    v-model="emplName" placeholder="请输入搜索关键词" />
    <div class="list">
      <div @click="select(item)"  v-for="(item,i) in list" :key="i" class="row">
        <div class="info">
          <span class="name">{{item.emplName }}</span>
        </div>
        <span class="_icon">
          <img v-if="reqIds.indexOf(item.id) == -1" src="../../assets/select.png" >
          <img v-else src="../../assets/select-act.png" >
        </span>
      </div>
    </div>
  </div> 
</template>

<script>
import { selectEmp } from '@/api/index'
import {  Search  , Sticky , NavBar, Form, Radio} from 'vant';
export default {
  name: 'home',
  components: {
    "van-search":Search,
    'van-sticky': Sticky,
    'van-nav-bar':NavBar
  },
  data() {
    return {
      container:null,
      emplName:"",
      list:[],
      reqIds:[],//
      reqData:[],
      type:'radio'
    };
  },
  computed:{
    route(){
      return '选择拜访对象'
    },
    schoolId(){
      return sessionStorage.getItem('schoolId')
    }
  },
  methods: {
    init(data){
      let type = data.type  // radio //checkBox 
      this.type = type 
      this.reqData = data.reqData
      this.reqIds = data.reqIds
      this.getList();
    },
    close(){
      this.$emit('close')
    },
    // 获取教师列表
    getList(){
      let params = {
        schoolId: this.schoolId,
        emplName: this.emplName,
        pageNum: 1,
        pageSize: 200
      }
      selectEmp(params).then((res) => {
        this.list = res.data.list
      })
    },
    onSearch(){
      this.getList();
    },
    onCancel(){
      this.getList();
    },
    dmo(){
      this.$emit('sure',{
        type:this.type,
        resData:this.reqData,
        resIds:this.reqIds
      })
    },
    select(row){
      if(this.type == 'radio' ){
        this.reqIds = []
        this.reqData = []
        this.reqIds.push(row.id)
        this.reqData.push(row)
      }else{
        let index = this.reqIds.indexOf(row.id) 
        console.log(index,11111)
        if(index == -1){
          this.reqIds.push(row.id)
          this.reqData.push(row)
        }else{
          this.reqIds.splice(index,1)
          this.reqData.splice(index,1)
        }
      }
    }
  },
};

</script>
<style lang="scss" scoped>
.container{
  padding-bottom: 160px;
  /deep/.van-nav-bar__arrow{
    font-size: 40px;
  }
  /deep/.van-field__control{
    font-size: 28px;
  }
  .list{
    background: #fff;
    .row{
      height: 120px;
      line-height: 120px;
      padding: 0px 20px;
      border-bottom: 1px solid #F8F8F8;
      display: flex;
      justify-content: space-between;
      .info{
        display: flex;
        .headImg{
          width: 80px;
          height: 80px;
          border-radius: 100%;
          margin-top: 20px;
        }
        .name{
          font-size: 32px;
          color: #333;
          margin-left: 20px;
        }
      }
      ._icon{
        img{
          border-radius: 100%;
          width: 44px;
          height: 44px;
        }
      }
    }
  }
}
</style>
