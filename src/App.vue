<template>
  <div id="app">
    <el-row class="head">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <img src="./common/img/china_telecom.png" alt="" class="header-logo">
          <span class="header-title"> 物联网水电气表运营管理平台</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="body-wrapper">
      <el-col :span="0" class="nav">
        <el-col :span="24">
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   theme="dark" :router="true" :unique-opened="true">
            <el-menu-item index="1" :route="{path:'/'}"><i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>查询</template>
              <el-menu-item index="2-1" :route="{path:'/deviceCheck'}">表具查询</el-menu-item>
              <el-menu-item index="2-2" :route="{path:'/statisticsReport'}">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-menu"></i>报表</template>
              <el-menu-item index="3-1" :route="{path:'/monthTable'}">用量月报表</el-menu-item>
              <el-menu-item index="3-2" :route="{path:'/yearTable'}">用量年报表</el-menu-item>
              <el-menu-item index="3-3" :route="{path:'/installTable'}">安装统计表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-menu"></i>管理</template>
              <el-menu-item index="4-1" :route="{path:'/deviceInfo'}">表具信息</el-menu-item>
              <el-menu-item index="4-2" :route="{path:'/autoAlarm'}" v-show="false">自动报警</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-menu"></i>职能权限</template>
              <el-menu-item index="5-1" :route="{path:'/changePwd'}">修改密码</el-menu-item>
              <el-menu-item index="5-2" :route="{path:'/addFactory'}">水务局查询和添加</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-col>
      <el-col :span="24" class="content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        permission: Number
      }
    },
    created () {
      console.log('111')
      axios.get('/api/permission').then((res) => {
        let data = res.data
        this.permission = data.permission
      })
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    name: 'app'
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

  .head {
    width: 100%;
    height: 68px;
    background: #FFF;
    border-bottom: #dcdcdc 1px solid;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    -webkit-box-shadow: 0 0 5px 4px rgba(162, 162, 162, .2);
    box-shadow: 0 0 5px 4px rgba(162, 162, 162, .2);

  .grid-content {
    height: 68px;

  .header-logo {
    width: 136px;
    height: 43px;
    padding: 12px 95px 0 36px;
  }

  .header-title {
    display: inline-block;
    height: 68px;
    vertical-align: top;
    line-height: 68px;
    font-size: 22px;
    color: #979797;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }

  }
  }
  .body-wrapper {
    padding-top: 68px;

  .nav {
    width: 233px;
    height: 100%;
    background: #283549;
    position: fixed;
    top: 68px;
    left: 0;
    z-index: 100;
  }

  .content {
    padding-left: 236px;
  }

  }
  }
</style>
