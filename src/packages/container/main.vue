<template>
    <main class="em-main">
        <slot></slot>
    </main>
</template>
<script>
export default {
    name: 'em-main'
}
</script>
<style lang="scss">
.em-main{
    flex:1;
    padding:20px;
}
</style>