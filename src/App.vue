<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './router'
  export default{
    creates () {
      console.log('111')
      router.push('login')
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  @import 'common/style/common.less';

  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    background-color: #f1f1f2;
  }

  #app {

  }
</style>
