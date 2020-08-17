<template>
    <div class="em-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'em-col',
    data(){
       return {gutter:0}
    },
    props:{
        span:{
            type:Number,
            default:24
        },
        offset:{
            type:Number,
            default: null
        },
        xs:[Number,Object],
        sm:[Number,Object],
        md:[Number,Object],
        lg:[Number,Object],
        xl:[Number,Object]
    },
    computed:{ // 统一管理我们的样式
        colClass(){
            let classes = [];
            classes.push(`em-col-${this.span}`);
            if(this.offset){
               classes.push(`em-col-offset-${this.offset}`);
            }
            ['xs','sm','lg','xl'].forEach(type=>{
                if(typeof this[type] === 'object'){
                   let {span,offset} = this[type];
                   span && classes.push(`em-col-${type}-${span}`); //em-col-xs-1
                   offset && classes.push(`em-col-${type}-offset-${offset}`); // em-col-xs-offset-1
                } else {
                   this[type] && classes.push(`em-col-${type}-${this[type]}`);
                }
            })
            return classes
        },
        colStyle(){
            let style ={};
            if(this.gutter){
               style = {
                   ...style,
                   paddingLeft:this.gutter/2+'px',
                   paddingRight:this.gutter/2+'px'
               }
            }
            return style;
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/_var.scss';
//需要通过循环24 来创造出不同的宽度
@for $i from 1 through 24{
    .em-col-#{$i} {
        width:$i/24*100%;
    }
    .em-col-offset-#{$i} {
        margin-left:$i/24*100%;
    }
}
@include res(xs){
    @for $i from 1 through 24{
        .em-col-xs-#{$i} {
            width:$i/24*100%;   
        }
        .em-col-xs-offset-#{$i} {
            width:$i/24*100%;
        }
    }
}
@include res(sm){
    @for $i from 1 through 24{
        .em-col-sm-#{$i} {
            width:$i/24*100%;   
        }
        .em-col-sm-offset-#{$i} {
            width:$i/24*100%;
        }
    }
}
@include res(md){
    @for $i from 1 through 24{
        .em-col-md-#{$i} {
            width:$i/24*100%;   
        }
        .em-col-md-offset-#{$i} {
            width:$i/24*100%;
        }
    }
}
@include res(lg){
    @for $i from 1 through 24{
        .em-col-lg-#{$i} {
            width:$i/24*100%;   
        }
        .em-col-lg-offset-#{$i} {
            width:$i/24*100%;
        }
    }
}
@include res(xl){
    @for $i from 1 through 24{
        .em-col-xl-#{$i} {
            width:$i/24*100%;   
        }
        .em-col-xl-offset-#{$i} {
            width:$i/24*100%;
        }
    }
}
</style>