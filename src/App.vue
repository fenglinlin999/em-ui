<template>
  <div id="app">
    <em-table :columns="columns1" :data="data1"
     @on-select = "select"
     @on-select-all = "selectAll"
     @on-sort-change = "change"
     height="200px"
    >
    <template slot="name" slot-scope="{row,col}">
      <h1>{{row[col.key]}}</h1>
    </template>
    <template slot="action" slot-scope="{row,col}">
      <em-button>删除</em-button>
    </template>
    </em-table>
    <!--pager-count 指代的是 当前分页器中最多有多少个按钮-->
    <em-pagination :total="10" :pager-count="7" :current-page.sync="currentPage"></em-pagination>
  </div>
</template>
<script>
export default {
  methods:{
    change({col,type}){
      console.log(col,type);
    },
    select(selection,row){
      /**selection表示所有的，row哪一行*/
      console.log(selection,row);
    },
    selectAll(selection){
      console.log(selection);
    }
  },
  data() {
    return {
      currentPage: 6,
      columns1: [
        {
          type: "selection",
          width: 60
        },
        {
          title: "姓名",
          key: "name",
          slot:'name'
        },
        {
          title: "年龄",
          key: "age",
          /*sortable:true,//iview 默认排序 排序方法 */
          sortable:'custom', //custom(远程排序 自定义排序)
          sortType:'asc'
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "操作",
          slot:'action',
          key: "operator"
        }
      ],
      data1: [
        {
          name: "王小明",
          age: 18,
          address: "北京市朝阳区芍药居"
        },
        {
          name: "张小刚",
          age: 25,
          address: "北京市海淀区西二旗"
        },
        {
          name: "李小红",
          age: 30,
          address: "上海市浦东新区世纪大道"
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
</style>
