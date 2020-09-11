//所有的组件入口
import Button from './button/button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button/button-group.vue';
import Row from './layout/row.vue';
import Col from './layout/col.vue';


import Container from './container/container.vue';
import Header from './container/header.vue';
import Aside from './container/aside.vue';
import Footer from './container/footer.vue';
import Main from './container/main.vue';
import Input from './input.vue'
import upLoad from './upload/upload.vue'
import emProgress from './progress.vue'
import DataPicker from './date-picker/date-picker.vue'
import DataRangePicker from './date-picker/date-range-picker.vue'
import popOver from './popover.vue'
import Carousel from './carousel/carousel.vue'
import CarouselItem from './carousel/carousel-item.vue'

import infiniteScroll from './infiniteScroll'
const install = (Vue)=>{
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
    Vue.component(Row.name,Row)
    Vue.component(Col.name,Col)
    Vue.component(Container.name,Container)
    Vue.component(Header.name,Header)
    Vue.component(Aside.name,Aside)
    Vue.component(Main.name,Main)
    Vue.component(Footer.name,Footer)
    Vue.component(Input.name,Input)
    Vue.component(upLoad.name,upLoad)
    Vue.component(emProgress.name,emProgress)
    Vue.component(DataPicker.name,DataPicker)
    Vue.component(DataRangePicker.name,DataRangePicker)
    Vue.directive(infiniteScroll.name,infiniteScroll)
    Vue.component(popOver.name,popOver)
    Vue.component(Carousel.name,Carousel)
    Vue.component(CarouselItem.name,CarouselItem)
}
//有可能组件会通过script标签的方式引入
//<script src = 'em-ui'></script>
if (typeof window.Vue !== 'undefined'){
   install(Vue);//全局直接通过script 引用的方式会默认调用install方法
}
export default {
    install
}