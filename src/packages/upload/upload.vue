<template>
    <div class="em-upload">
        <uploadDragger v-if="drag" :accept="accept" @file="uploadFiles"></uploadDragger>
        <template v-else>
            <div @click="handleClick" class="em-upload-btn">
           <slot></slot>
        </div>
        <input
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="handleChange"
        :name="name"
        ref="input"
        class="input"
        />
        </template>
        <div>
            <slot name="tip"></slot>
        </div>
        <ul>
            <li v-for="(file,index) in files" :key="file.uid+index">
               <div class="list-item">
                   <em-icon icon="image"></em-icon>
                   {{file.name}}
                   <em-progress v-if="file.status === 'uploading'" :percentage="file.percentage"></em-progress>
                   {{file.status}}
                   <em-icon icon="cha"></em-icon>
               </div>
            </li>
        </ul>
    </div>
</template>
<script>
import ajax from './ajax.js'
import uploadDragger from './upload-dragger.vue'
export default {
    name:"em-upload",
    components:{
        uploadDragger
    },
    data () {
       return {
           tempIndex:1,
           files:[], //存储要展示的列表,可以在这里删除你要删除的文件（询问用户是否要删除？确定 取消）
           reqs:{}
       }
    },
    props:{
        name:{
            type:String,
            default:'file'
        },
        action:{
            type:String,
            required:true
        },
        fileList:{
            type:Array,
            default:()=>[]
        },
        accept:String,
        limit:Number,
        multiple:Boolean,
        onExceed:Function,
        onChange:Function,
        onSuccess:Function,
        onError:Function,
        onProgress:Function,
        beforeUpload:Function,
        httpRequest:{//我会默认提供一个ajax 如果你传了就用你的
            type:Function,
            default:ajax
        },
        drag:{
            type:Boolean,
            default:false
        } //面试设计一个组件 1，用户要有哪些功能，2，你需要暴露给用户哪些功能，3，在考虑用户的行为 再去设计组件
    },
    watch:{
        fileList:{
            immediate:true, //立即执行处理函数
            handler(fileList){
              this.files = fileList.map(item=>{
                  item.uid = Date.now() + this.tempIndex;
                  item.status = 'success';
                  return item
              })
            }
        }
    },
    methods:{
        handleClick() {
            //点击之前，先还原输入框
            this.$refs.input.value = null
            this.$refs.input.click() 
        },
        handleStart(rawFile){
          // 给文件生成一个唯一的id标识
          rawFile.uid = Math.random() + this.tempIndex++;
          let file = { //我自己构建了一条文件信息
              status:"ready", // 默认准备上传
              name:this.name, // 文件名字
              size:rawFile.size, // 上传图片的大小
              percentage:0, // 上传的进度
              uid:rawFile.uid,
              raw:rawFile
           }
           this.files.push(file); //用户上传的文件放到列表当中，一会儿要显示
           this.onChange && this.onChange(file);
        
        },
        getFile(rawFile){
            return this.files.find(file=>file.uid == rawFile.uid);
        },
        handleProgress(ev,rawFile){
          //给不同的状态
          //通过源文件 用户上传的文件 -》我格式化的结果
          let file = this.getFile(rawFile); //这个file就是当前格式化后的
          file.status = 'uploading';
          file.percentage = ev.percent || 0; //赋值上传进度
          this.onProgress(ev,rawFile); //调用用户的回调
        },
        handleSuccess(res,rawFile){
           let file = this.getFile(rawFile);
           files.status = 'success';
           this.onSuccess(res,rawFile);
           this.onChange(file);
        },
        handleError(err,rawFile){
           let file = this.getFile(rawFile);
           file.status = 'fail';
           this.onError(err,rawFile);
           this.onChange(file);
           delete this.reqs[file.uid]; //已经失败的ajax 不需要后续在中断请求了
        },
        post(rawFile){
          //真正的上传逻辑
          //调用httpRequest方法
          //需要整合一下参数 调用ajax 需要传递参数，处理上传的整个流程
          const uid=rawFile;// 这里可能稍后上传的时候 会后悔 中断ajax序号
          const options={
              file:rawFile,
              fileName:rawFile.name,
              action:this.action,
              onProgress:ev=>{
                // 上传处理中的状态
                console.log(ev,rawFile);
                this.handleProgress(ev,rawFile);
              },
              onSuccess:res=>{
                // 上伟成功的状态
                console.log(res,rawFile);
                this.handleSuccess(res,rawFile);
              },
              onError:err=>{
                 //处理失败时的状态
                 console.log(err,rawFile);
                 this.handleError(err,rawFile);
              }
            }
            // req就是当前的请求
            let req = this.httpRequest(options);
            this.reqs[uid] = req;//每个ajax先存起来，稍后可以取消请求
            //允许用户使用的是promise的ajax
            if(req && req.then){
                req.then(options.onSuccess,options.onError)
            }
        },
        upload(rawFile){
          // 上传文件
          // 先判断这个文件是否能够上传 没有任何限制直接上传即可
          if(!this.beforeUpload){
             //直接上传
             return this.post(rawFile);
          }
          //否则需要调用用户的函数 获取他的返回值
          let flag = this.beforeUpload(rawFile)
          if(flag){ //用户返回true 表示需要上传
             //直接上传
             return this.post(rawFile);
          }
        },
        uploadFiles(files){
           //限制上传是否达到最大条件
           if(this.limit && this.fileList.length + files.length >this.limit){
             return this.onExceed && this.onExceed(files,this.fileList)
           }
           [...files].forEach(rawFile => {
               //用户的文件 我需要做一些处理 可能用户频繁上传同一个文件
               //将文件格式化成我想要的结果
               this.handleStart(rawFile);//处理上传之前
               this.upload(rawFile);//真正的上传
           });
        },
        handleChange(e) {
            //获取选中的文件
            const files = e.target.files;
            //多个文件如何上传 多创建几个ajax 一起传就ok
            this.uploadFiles(files)

        }
    }
}
</script>
<style lang="scss">
.em-upload{
    .em-upload-btn{
        display:inline-block;
    }
    .input{
        display:none;
    }
}
</style>