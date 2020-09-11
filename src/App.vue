<template>
  <div id="app">
    <!--封装组件：1.怎么设计这个组件 2.如何拆分-->
     <em-carousel
        height="200px"
        :autoplay="true"
        :delay="2000"
        :initial-index="0"
        :loop="true"
        @change="change"
     >
        <em-carousel-item>
           <div class="content" style="background:red;">内容1</div>
        </em-carousel-item>
        <em-carousel-item>
          <div class="content" style="background:green;">内容2</div>
        </em-carousel-item>
        <em-carousel-item>
          <div class="content" style="background:pink;">内容3</div>
        </em-carousel-item>
     </em-carousel>
  </div>
</template>
<script>
export default {
  methods:{
    change(index){
      console.log(index);
    }
  }
}
</script>
<style lang="scss">
.content{
  width:100%;
  height:100%;
}
</style>
