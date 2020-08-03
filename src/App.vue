<template>
<div id="app">
 <em-button>默认按钮</em-button>
 <!--带类型的按钮--->
 <em-button type="primary">主要按钮</em-button>
 <em-button type="warning">警告按钮</em-button>
 <em-button type="danger">危险按钮</em-button>
 <em-button type="success">成功按钮</em-button>
 <em-button type="info">信息按钮</em-button>
 <em-icon icon="sousuo"></em-icon>
 <em-icon icon="chilun"></em-icon>

 <!--带icon的按钮-->
  <em-button type="info" icon="sousuo">信息按钮</em-button>
  <em-button type="primary" icon="sousuo"></em-button>
  <em-button type="info" icon="sousuo" icon-position="right">内容</em-button>
  <em-button type="success" loading>加载中</em-button>
  <!--触发事件-->
  <em-button type="success" @click="fn">触发事件</em-button>

  <em-button-group>
    <em-button icon="jiantou-zuo" icon-position="left">上一页</em-button>
    <em-button icon="jiantou" icon-position="right">下一页</em-button>
  </em-button-group>
</div>
</template>
<script>
export default {
  name: 'App',
  methods:{
    fn(e){
      console.log(e);
    }
  }
}
</script>
<style lang="scss">
@import './styles/_var.scss';
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