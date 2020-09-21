<template>
    <ul class="em-pagination">
        <li><em-icon icon="fenye-left" @click="select(currentPage-1)"></em-icon></li>
        <li><span :class="{active:currentPage === 1}">1</span></li>
        <li v-if="showPrevMore"><span>...</span></li>
        <li v-for="p in pagers" :key="p"><span @click="select(p)" :class="{active:currentPage === p}">{{p}}</span></li>
        <li v-if="showNextMore"><span>...</span></li>

        <li><span @click="select(total)" :class="{active:currentPage === total}">{{total}}</span></li>
        <li><em-icon icon="fenye-right" @click="select(currentPage+1)"></em-icon></li>
    </ul>
</template>
<script>
export default {
    name:"em-pagination",
    data(){
      return{
          showPrevMore:false,
          showNextMore:false
      }
    },
    methods:{
      select(current){
         if(current < 1){
             current = 1;
         }
         if(current > this.total){
              current = this.total
         }
         if(current !== this.currentPage){
               this.$emit('update:current-page',current);
         }
      }
    },
    computed:{
        /**????7???
           ?????? 1 2 3 4 5 6 ... 10
           ????????? 1 ... 3 4 5 6 7 ... 10
           ??????????? 1 ... 5 6 7 8 9 10
           1 2 3 4 5 6 7 8 9 10*/
       pagers(){
           /**?????*/
           let total = this.total;
           let pagerCount = this.pagerCount;
           let middleValue = Math.floor(this.pagerCount/2);
           let currentPage = this.currentPage;
           /**?????????... ???????...*/
           let showPrevMore = false;
           let showNextMore = false;
           if(total > pagerCount){
              /**????... */
              if(currentPage > middleValue + 1){
                   showPrevMore = true;
              }
              if(currentPage < total - middleValue){
                 showNextMore = true
              }
           }
           /**  ?????... ????5??? 1 ... 3 4 5 6 7 ... 10*/
           let arr = [];
           if(showPrevMore && !showNextMore){
              /**????? 10  ??????5? **/ 
              let start = total - (pagerCount - 2);
              for(let i = start; i< total; i++){
                  arr.push(i);
              }
           }else if (!showPrevMore && showNextMore){
               for(let i =2;i<pagerCount;i++){
                   arr.push(i);
               }
           }else if (showPrevMore && showNextMore){
               let val = Math.floor((pagerCount-2)/2);
               for(let i = currentPage - val;i<=currentPage+val;i++){
                   arr.push(i);
               }
           }else {
              for(let i=2;i<total;i++){
                  arr.push(i);
              }   
           }
           this.showPrevMore = showPrevMore;
           this.showNextMore = showNextMore;
           return arr;
       }
    },
    props:{
        total:{
            type:Number,
            default:1
        },
        pagerCount:{
            type:Number,
            default:7
        },
        currentPage:{
            type:Number,
            default:1
        }
    }
}
</script>
<style lang="scss">
.em-pagination li{
    list-style: none;
    display: inline-flex;
    vertical-align: middle;
    user-select: none;
    .active{
        color:red;
    }
}
</style>