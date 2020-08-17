<template>
    <aside class="em-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>
<script>
export default {
    name: 'em-aside',
    props:{
        width:{
            type:String,
            default:'300px'
        }
    }
}
</script>
<style lang="scss">

</style>