import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//基础信息对象
    testObj:1,
    promiseVal:100,
  },
  mutations: {//对基础信息进行修改的事件对象，每个事件必须是同步操作
    test(state){
      state.testObj++
    },
    promiseTest(stete){
      stete.promiseVal++
    }
  },
  actions: {//用于异步提交mutations，不直接改变基础对象，action的方法名和mutations是对应的；Action 通过 store.dispatch 方法触发：store.dispatch('increment')
    test(context){//效果如下，用于异步提交mutations；
      setTimeout(()=>{
        context.commit('test')
      },2000)
    },
    promiseTest(context){
      //promise之后可以使用链式调用方式，如下：
      // store.dispatch('actionA').then(() => {
      //   // ...
      // })
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('promiseTest')
        },2000)
      })
    }
  },
  modules: {
  }
})
