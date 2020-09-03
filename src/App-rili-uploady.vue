<template>
<div id="app">
 <!--上传的功能 input type="file" name="" form ajax+formdata-->
<!--
  name 输入框提交到后台的字段名字
  action 提交到后端的路径
  limit 限制提交个数
  on-exceed 用来如果超出限制后 会扏行此方法
  on-change 如果当前上传文件的状态发生变化的时候 会触发 如果用户选择了文件，上传成功，失败
  on-success 在上传成功时候会触发
  on-error 在失败时会触发
  on-progress 上传时会多次触发
  fileList 显示已经上传过的文件
-->
<em-upload
  name="avatar"
  action="http://localhost:3000/upload"
  :file-list = "fileList"
  :limit="3"
  accept="image/jpeg"
  :multiple="true"
  :on-exceed="handleExceed"
  :on-change="handleChange"
  :on-success="handleSuccess"
  :on-error="handleError"
  :on-progress="handleProgress"
  :before-upload="beforeUpload"
  :drag="true"
>
<em-button type="primary" icon="shangchuan">
  点击上传
</em-button>
<div slot="tip">
  只能上传jpg/png文件，且不超过500kb
</div>
</em-upload>












  <!-- <em-input 
    name="username" 
    type="text" 
    v-model="value"
    paceholder='请输入内容'>
  </em-input>
  <em-input 
    name="username" 
    type="password" 
    v-model="value"
    paceholder='请输入内容'>
  </em-input>
  <em-input 
    name="username" 
    type="password" 
    v-model="value"
    :disabled= "true"
    paceholder='请输入内容'>
  </em-input>
  <em-input 
    name="username" 
    type="password" 
    v-model="value"
    :clearable="true"
    paceholder='请输入内容'>
  </em-input>
  <em-input 
    name="username" 
    type="password" 
    v-model="value"
    show-password
    clearable
    paceholder='请输入内容'>
  </em-input>
  <em-input
    name="username" 
    type="password" 
    v-model="value"
    paceholder='请输入内容'
    prefix-icon="edit">
  </em-input>
  <em-input
    name="username" 
    type="password" 
    v-model="value"
    paceholder='请输入内容'
    suffix-icon="edit">
  </em-input>
  {{value}} -->
  <!-- <em-container>
     <em-aside width="200px">Aside</em-aside>
     <em-container>
       <em-header>Header</em-header>
       <em-main>Main</em-main>
     </em-container>
  </em-container>
  <em-container>
    <em-aside width="200px">Aside</em-aside>
    <em-container>
      <em-header>Header</em-header>
      <em-main>Main</em-main>
      <em-footer>Footer</em-footer>
    </em-container>
  </em-container> -->
 <!-- <em-button>默认按钮</em-button> -->
 <!--带类型的按钮--->
 <!-- <em-button type="primary">主要按钮</em-button>
 <em-button type="warning">警告按钮</em-button>
 <em-button type="danger">危险按钮</em-button>
 <em-button type="success">成功按钮</em-button>
 <em-button type="info">信息按钮</em-button>
 <em-icon icon="sousuo"></em-icon>
 <em-icon icon="chilun"></em-icon> -->

 <!--带icon的按钮-->
  <!-- <em-button type="info" icon="sousuo">信息按钮</em-button>
  <em-button type="primary" icon="sousuo"></em-button>
  <em-button type="info" icon="sousuo" icon-position="right">内容</em-button>
  <em-button type="success" loading>加载中</em-button> -->
  <!--触发事件-->
  <!-- <em-button type="success" @click="fn">触发事件</em-button>

  <em-button-group>
    <em-button icon="jiantou-zuo" icon-position="left">上一页</em-button>
    <em-button icon="jiantou" icon-position="right">下一页</em-button>
  </em-button-group> -->
  <!--布局-->
  <!-- <em-row>
    <em-col :span="12" class="red">
      <div>aaa</div>
    </em-col>
    <em-col :span="12" class="green">
      <div>bbb</div>
    </em-col>
  </em-row>
  <em-row>
    <em-col :span="24" class="red">
      <div>ccc</div>
    </em-col>
  </em-row>
  <hr>
  <em-row>
    <em-col :span="6" class="red">
      <div>eee</div>
    </em-col>
    <em-col :span="6" class="green" :offset="12">
      <div>fff</div>
    </em-col>
  </em-row>
  <hr>
  <div style="width:80%; margin:0 auto;">
    <em-row :gutter="20">
    <em-col :span="6"><div class="red">111</div></em-col>
    <em-col :span="6"><div class="green">222</div></em-col>
    <em-col :span="6"><div class="red">333</div></em-col>
    <em-col :span="6"><div class="green">444</div></em-col>
  </em-row>
  </div>
  <hr>
  <em-row justify="space-between">
    <em-col :span="3">
      <div class="red">ccc</div>
    </em-col>
    <em-col :span="3">
      <div class="green">ddd</div>
    </em-col>
  </em-row> -->
  <!-- <hr>
  <em-row :gutter="10">
    <em-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple"></div>
    </em-col>
    <em-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple-light"></div>
    </em-col>
    <em-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple"></div>
    </em-col>
    <em-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple-light"></div>
    </em-col>
  </em-row> -->

  <!--日历-->
{{value}}
<hr>
<em-date-picker v-model="value"></em-date-picker>
</div>
</template>
<script>
export default {
  name: 'App',
  methods:{
    fn(e){
      console.log(e);
    }
  },
  data(){
    return {
      fileList:[
        {url:'xxx',name:'fenglinlin'}
      ],
      value:'',
      value2:[]
    }
  },
  methods:{
    handleExceed(files,fileList){
      console.log('用户已超过上传数量')
    },
    handleChange(file){
      console.log(file);
    },
    handleSuccess(res,rawFile){
      console.log(res);
    },
    handleError(err,rawFile){
      console.log(err);
      console.log('上传失败');
    },
    handleProgress(ev,rawFile){
      console.log(ev);
    },
    beforeUpload(rawFile){
      let limitSize = rawFile.size / 1024 > 500
      if(limitSize){
        console.log('当前超过了最大限制');
        return false
      }else if(!rawFile.name.endsWith('.jpg')){
         console.log('文件类型不对');
         return false
      }
      return true
    }
  }
}
</script>
<style lang="scss">
@import './styles/_var.scss';
.em-header, .em-footer{
  background-color:#B3C0D1;
  color:#333;
  text-align:center;
  line-height: 60px;
}
.em-aside{
  background-color:#d3dce6;
  color:#333;
  text-align:center;
  line-height:200px;
}
.em-main{
  background-color:#E9EEF3;
  color:#333;
  text-align:center;
  line-height:60px;
}
.body > .em-container{
  margin-bottom: 40px;
}
.red{
  background:red;
}
.green{
  background:green;
}
.em-col{
  border-radius: 4px;
}
.bg-purple-dark{
  background:#99a9bf;
}
.bg-purple{
  background:#d3dce6;
}
.bg-purple-light{
  background:#e5e9f2;
}
.grid-content{
  border-radius:4px;
  min-height:36px;
}
.em-button-group{
  display: inline-flex;
  vertical-align: middle;
  button{
    position: relative;
    border-radius:0;
    &:not(first-child){
      margin-left:-1px;
    }
    &:first-child{
      border-top-left-radius: $border-radius;
      border-bottom-left-radius:$border-radius;
    }
    &:last-child{
      border-top-right-radius: $border-radius;
      border-bottom-right-radius:$border-radius;
    }
    &:hover{
      z-index:1;
    }
    &:focus{
      z-index:2;
    }
  }
}
</style>