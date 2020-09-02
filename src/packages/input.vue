<template>
    <div class="em-input" :class="inputClass">
        <em-icon 
            :icon="prefixIcon"
            v-if="prefixIcon">
        </em-icon>
        <input 
           :value="value"
           :name="name"
           :placeholder="paceholder"
           :type="showPassword?(passwordVisible?'text':'password'):type"
           :disabled="disabled"
           @input="$emit('input',$event.target.value)"
           ref="input"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           @change="$emit('change',$event)"
        />
        <em-icon 
            :icon="suffixIcon"
            v-if="suffixIcon">
        </em-icon>
        <!--@mousedown.native.prevent 不会失去焦点-->
        <em-icon 
          icon="qingkong"
          v-if="clearable && value"
          @click.native="$emit('input','')"
          @mousedown.native.prevent 
        ></em-icon>
        <!--先失去焦点 再获取焦点-->
        <em-icon 
          icon="eye"
          v-if="showPassword && value"
          @click.native="changeStatus"
        ></em-icon>
    </div>
</template>
<script>
export default {
    name: 'em-input',
    data(){
       return {passwordVisible:false}
    },
    props:{
        value:{
            type:String,
            default:''
        },
        paceholder:{
            type:String,
            default: '请输入内容'
        },
        type:{
            type:String,
            default: 'text'
        },
        name:{
            type:String,
            default: null
        },
        disabled:{
            type:Boolean,
            default: false
        },
        clearable:{
            type:Boolean,
            default:false
        },
        showPassword:{
            type:Boolean,
            default:false
        },
        prefixIcon:String,
        suffixIcon:String
    },
    computed:{
        inputClass(){
            let classes = [];
            if(this.clearable || this.showPassword || this.suffixIcon){
               classes.push(`em-input-suffix-icon`)
            } 
            if(this.prefixIcon){
               classes.push(`em-input-prefix-icon`)
            }
            return classes
        }
        
    },
    methods:{
        changeStatus(){
            this.passwordVisible = !this.passwordVisible
            this.$nextTick(()=>{
                this.$refs.input.focus()
            })
        }
    }

}
</script>
<style lang="scss">
@import "../styles/_var.scss";
.em-input{
    display: inline-flex;
    position:relative;
    input{
        padding:8px;
        width:150px;
        height:42px;
        border-radius:4px;
        border:1px solid #dcdfe6;
        &:focus{
            border:1px solid $primary;
            outline: none;
            box-shadow:inset -1px 0 2px $primary,inset 1px 1px 1px $primary;
        }
        &[disabled]{
            cursor: not-allowed;
            background:#eee;
        }
    }
}
.em-input-suffix-icon{
  .em-icon{
        right:8px;
        top:13px;
        position: absolute;
        cursor: pointer;
        width:14.5px;
        height:14.5px;
   }
}
.em-input-prefix-icon{
  .em-icon{
        left:8px;
        top:13px;
        position: absolute;
        cursor: pointer;
        width:14.5px;
        height:14.5px;
        background:red;
   }
}


</style>