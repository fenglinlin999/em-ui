<template>
    <section class="em-container" :class="{isVertical}">
        <slot></slot>
    </section>
</template>
<script>
export default {
    name: 'em-container',
    data(){
        return {isVertical:true}
    },
    mounted(){
        this.isVertical = this.$children.some(child=>['em-footer','em-header'].includes(child.$options.name))
    }
}
</script>
<style lang="scss">
.em-container{
    display: flex;
    flex-direction: row;
    flex:1;
}
.em-container.isVertical{
    flex-direction: column;
}
</style>