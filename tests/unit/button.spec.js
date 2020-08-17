import { shallowMount } from '@vue/test-utils';//vue提供的快速测试的方法
import {expect} from 'chai';

import Button from '@/packages/button/button.vue';
import Icon from '@/packages/icon.vue';

describe('button.vue',()=>{
    it('1.测试button能否正常显示slot里的内容',()=>{ //测试当前组件运行在浏览器的情况
        const wrapper = shallowMount(Button,{
            slots:{
                default:'em-ui'
            }
        });
        expect(wrapper.text()).to.eq('em-ui');
    })
    it('2.测试icon传入是否能正常显示',()=>{ 
        const wrapper = shallowMount(Button,{
            stubs:{
              'em-icon':Icon //替换的功能
            },
            propsData:{
                icon: 'sousuo'
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-sousuo')
    })
    it('3.测试loading时 按钮是禁用状态',()=>{ 
        const wrapper = shallowMount(Button,{
            stubs:{
              'em-icon':Icon //替换的功能
            },
            propsData:{
                loading: true
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading')
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
    })
    it('4.测试按钮能否正常点击',()=>{
       const wrapper = shallowMount(Button,{
           //桩 node.js内置文件
           // stubs:['em-icon'],//不去渲染 只是一个加标签
       });
       wrapper.find('button').trigger('click');
       expect(wrapper.emitted('click').length).to.eq(1)     
    })
    it('5.按钮传入position是否显示正常',()=>{
        const wrapper = shallowMount(Button,{
            attachToDocument:true,//将组件挂载到浏览器上
            stubs:{
              'em-icon':Icon //替换的功能
            },
            slots:{
               default:'em-ui'
            },
            propsData:{
                iconPosition:'left',
                icon: 'sousuo'
            }
        });
        let ele = wrapper.vm.$el.querySelector('span');
        expect(getComputedStyle(ele).order).to.eq('2');
        wrapper.setProps({iconPosition:'right'});//设置props,必须在下一个事件环中取值
        return wrapper.vm.$nextTick().then(()=>{
            expect(getComputedStyle(ele).order).to.eq('1');
        })
    })
})
