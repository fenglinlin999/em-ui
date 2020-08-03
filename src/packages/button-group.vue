<template>
    <div class="em-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'em-button-group',
    //校验内部孩子是否是我们的button组件 如果不是报错
    mounted(){
       let children = this.$el.children;
       for(let i=0;i<children.length;i++){
         console.assert(children[i].tagName === 'BUTTON','子元素必须是button')
       }
    }
}
</script>