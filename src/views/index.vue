<template>
  <div class="page">
    <van-sticky>
      <van-nav-bar :title="route.meta.title" ></van-nav-bar>
    </van-sticky>
    <div class="row ">
      <span>
        <img src="@/assets/xing.png" class="icon" alt="">来访人姓名
      </span>
      <span>
        <input v-model="formQuery.visiName" maxlength="20" placeholder="请输入来访人姓名" type="text" />
      </span>
    </div>
    <div class="row ">
      <span>
        <img src="@/assets/xing.png" class="icon" alt="">来访人手机号
      </span>
      <span>
        <input v-model="formQuery.phone" type="number"   placeholder="请输入来访人手机号"/>
      </span>
    </div>
    <div class="row ">
      <span>
        <img src="@/assets/xing.png" class="icon" alt="">身份证号
      </span>
      <span>
        <input v-model="formQuery.credentialsNo" maxlength="18" placeholder="请输入来访人身份证号" type="text" />
      </span>
    </div>
    <div class="row ">
      <span>
        <img src="@/assets/xing.png" class="icon" alt="">来访类型
      </span>
      <span @click="show = true" class="c9"> 
        <span>{{formQuery.typeChinese || '请选择' }} </span>
        <van-icon class="vam" name="arrow" /> 
      </span>
    </div>
    <div class="rowBox ">
      <p>来访人事由</p>
      <textarea  maxlength="100" v-model="formQuery.cause" placeholder="请输入来访事由" cols="30" rows="10"></textarea>
    </div>
    <div class="rowBox ">
      <p>入园流程</p>
      <div class="len notop">
        <div class="round"></div>
        <div class="con-info">
          <p class="ctitle c3">
            <span>拜访对象</span>
            <span class="last-child">(必选)</span>
          </p>
          <p v-if="!formQuery.visitUser" class="finfo">请选择拜访对象</p>
          <div v-else>
            <p class="userName">{{selectUser.emplName}}</p>
          </div>
        </div>
        <img @click="showMenue('radio')" src="../assets/add.png" class="addIcon" alt="审批">
      </div>
      <div class="len nobottom">
        <div class="round"></div>
        <div class="con-info">
          <p class="ctitle c3"><span>抄送人</span></p>
          <p v-if="!formQuery.userList" class="finfo">请选择抄送人</p>
          <div v-else>
            <p class="userName"> 
              <span class="mr" v-for="(item,index) in chaosong" :key="index" >
                {{item.emplName}}
              </span> 
            </p>
          </div>
        </div>
        <img @click="showMenue('checkbox')" src="../assets/add.png" class="addIcon" alt="抄送">
      </div>
      <div class="fixed-bottom">
        <van-button @click="submit" block color="#47D9D8"> 提 交 </van-button>
      </div>
    </div>
    <van-popup  position="bottom" v-model="show">
      <van-picker title="标题" show-toolbar :columns="columns" @confirm="onConfirm"/>
    </van-popup>
    <van-popup  position="right" style="width:100%;height:100%;" v-model="show2">
       <i-list ref="list"  @close="show2 = false" @sure="change"></i-list>
    </van-popup>
  </div>
</template>
<script>
import { visitor } from '@/api/index'
import Ilist from './pagecom/select.vue'
import { Icon , NavBar ,Sticky ,  Popup , Toast  , Picker , Button } from 'vant';
export default {
  name: 'home',
  components: {
    'van-icon': Icon,
    'van-nav-bar': NavBar,
    'van-sticky': Sticky,
    'van-popup': Popup,
    "van-picker":Picker,
    'van-button': Button,
    'i-list':Ilist
  },
  data() {
    return {
      show2:false,
      show:false,
      selectUser:{},
      formQuery:{
        visiName:"", 
        schoolId:sessionStorage.getItem('schoolId'),
        phone:"",
        credentialsNo:"",
        typeChinese:"",
        type:"",
        cause:"",
        visitUserName:"",
        visitUser:"",
        userList:""
      },
      reqData:[],
      reqIds:[],
      chaosong:[],
      columns:['园区参观','合作洽谈','邀约拜访','例行检查','园区服务'],
    };
  },
  computed:{
    route(){ return this.$route }
  },
  methods: {
    onConfirm(value, index) {
      this.formQuery.typeChinese = value
      this.formQuery.type = Number(index+1)
      this.show = false
    },
    submit(){
      let params = {...this.formQuery}
      if(params.phone.length != 11 ){
        Toast('手机号码格式错误');
        return
      }
      if(params.credentialsNo.length != 18 ){
        Toast('身份证号号码格式错误');
        return
      }
      if(params.visiName == '' || params.type == '' || params.visitUserName=='' ){
        Toast('您有必填信息未填写，请检查');
        return
      }
      visitor(params).then((res) => {
        if(res.status == 200){
          this.$router.push({
            path:"/info",
            query:{type:1}
          })
        }
      })
    },
    // 
    showMenue(type){
      this.show2 = true
      this.$nextTick(()=>{
        this.$refs.list.init({
          type,
          reqData:[],
          reqIds:[],
        })
      })
    },
    change(data){
      this.reqData = data.resData 
      this.reqIds = data.resIds 
      this.show2 = false
      if(data.resData.length == 0 ) return
      if(data.type == 'radio'){
        this.selectUser = data.resData[0] 
        this.formQuery.visitUser = data.resIds[0]
        this.formQuery.visitUserName = data.resData[0].emplName
      }else{
        this.chaosong = data.resData
        this.formQuery.userList = data.resIds.toString()
      }
    }
  },
};

</script>
<style lang="scss" scoped>
.userImg{
  margin-bottom: -5px;
}
.page{
  padding-bottom: 160px;
  height: 100%;
  /deep/.van-nav-bar__arrow{
    font-size: 40px;
  }
  .fixed-bottom{
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding: 10px 24px;
    background-color: #fff;
    width: 100%;
  }
  .row{
    margin-top: 20px;
    display:flex;
    justify-content: space-between;
    background: #fff;
    height: 88px;
    line-height: 88px;
    font-size: 32px;
    color: #333;
    padding: 0px 30px;
  }
  .icon{
    width: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }
  input{
    font-size: 32px;
    text-align: right;
  }
  textarea::placeholder,
  input::placeholder{
    color: #999;
  }
  .vam{
    margin-top: -2px;
    margin-left: 2px;
  }
  .rowBox{
    color: #333;
    background: #fff;
    padding: 30px 30px;
    margin-top: 20px;
    p{
      margin: 0px;
      margin-bottom:30px;
      font-size: 32px;
    }
    textarea{
      background: #F8F8F8;
      height: 230px;
      width: 100%;
      border-radius: 4px;
      border: none;
      padding: 20px;
      font-size: 32px;
    }
    .notop {
      ::before{
        position: absolute;
        content: '';
        display: inline-block;
        height:calc(100% - 35px);
        left:13px;
        width: 2px;
        background: #DDDDDD;
        top: 34px;
      }
    }
    .nobottom {
      ::after{
        position: absolute;
        content: '';
        display: inline-block;
        height:35px;
        left:13px;
        width: 2px;
        background: #DDDDDD;
        top:-34px;
      }
    }
    .len{
      display: flex;
      position: relative;
      padding-bottom: 20px;
      .round{
        position: absolute;
        top: 45px;
        margin-top: -14px;
        width: 28px;
        height: 28px;
        border-radius: 100%;
        background: #DDDDDD;
      }
      .addIcon{
        position: absolute;
        top: 55px;
        margin-top: -30px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 100%;
      }
      .con-info{
        margin-left: 50px;
        p{margin: 0px ;}
        .ctitle{
          font-size: 32px;
          .last-child{
            color: #FF6D63;
            font-size: 24px;
            vertical-align: bottom;
          }
        }
        .finfo{
          font-size: 24px;
          color: #666;
        }
        .userImg{
          width: 51px;
          height: 51px;
          display: inline-block;
          border-radius: 100%;
        }
        .userName{
          margin: 0px;
          font-size: 24px;
          color: #666;
          padding-right: 100px;
        }
      }
    }
  }
}
</style>
