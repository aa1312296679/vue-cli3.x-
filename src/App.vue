<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--&lt;!&ndash;-->
        <!--rounter-link为vue模板语法中的超链接-->
        <!--编译输出时为生成一个超链接a标签-->
      <!--&ndash;&gt;-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>|-->
      <!--<router-link to="/main">Main</router-link>-->
    <!--</div>-->
   <!--
     router-view为根组件的动态组件
     它会根据当前路由调用路由对应的子组件
     作用：
     用于显示当前项目的当前路由地址所对应的组件内容
    -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
