<template>
  <div id="app" style="margin:200px 0 0 300px">
      <em-popover
         v-model="value"
         width='200px'
         title="标题"
         content="内容内容，这是一个popover"
         trigger="hover"
         placement="right"
      >
        <em-button type="primary" slot="reference">点我弹框</em-button>  
      </em-popover>
  </div>
</template>
<script>
export default {
  data(){
    return {
      value:true
    }
  }
}
</script>
