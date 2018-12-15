import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入
import HelloWorld from './components/HelloWorld.vue'
Vue.config.productionTip = false

// 全局注册helloWorld组件
Vue.component('hello-world', HelloWorld)
// 创建根组件的vue实例
new Vue({
  // 配置根组件的路由
  // 根组件会调用路由中的子组件并完成子组件的内容渲染
  router,
  // 配置根组件的vuex
  store,
  // 配置根组件的渲染视图
  render: b => b(App)
}).$mount('#app')
