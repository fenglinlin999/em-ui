<template>
  <div id="app">
    <ul style="overflow-y:scroll" 
        v-infinite-scroll="load" 
        class="box"
        infinite-scroll-disabled="disabled"
        infinite-scroll-delay="delay"
        infinite-scroll-distance="distance"
    >
      <li v-for="c in count" :key="c">{{c}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      disabled: false,
      delay:200,
      distance:30,
      immediate:true
    };
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
};
</script>
<style lang="scss">
@import "./styles/_var.scss";
.box {
  width: 400px;
  height: 300px;
  border: 1px solid green;
}
</style>