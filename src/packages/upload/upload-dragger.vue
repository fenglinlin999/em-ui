<template>
    <div 
        class="em-upload-dragger"
        @drop.prevent = "onDrop"
        @dragover.prevent
        @dragleave.prevent
    >
        <em-icon icon="shangchuan" class="icon"></em-icon>
        <span>将文件拖拽到此区域即可</span>
    </div>
</template>
<script>
export default {
    methods:{
        onDrop(e){
           if(!this.accpet){
              this.$emit('file',e.dataTransfer.files)
           }else{
               // 这里你可以自己进行过虑，看一下文件后缀 移除掉不需要的文件
               // image/jpeg
               // 发射过滤后的文件
               this.$emit('file',e.dataTransfer.files)
           }
        }
    }
}
</script>
<style lang="scss">
    .em-upload-dragger{
        background:#eee;
        border:1px solid #aaa;
        border-radius:10px;
        width:360px;
        height:180px;
        line-height: 180px;
        display: flex;
        flex-direction: row;
        .icon{
            width: 65px;
            height: 65px;
            margin: 65px auto 10px;
            background:chartreuse;
        }
    }

</style>