<template>
  <div class="page-wrapper">
    <titleComponent :titleText="'修改密码'"></titleComponent>
    <el-row>
      <el-col :span="24">
          <div class="change-password-wrapper">
            <div class="center-wrapper">
              <div class="line-wrapper">
                <span>旧密码：</span>
                <input type="password" class="old-password">
                <div class="old-password-tip tip-wrapper"></div>
              </div>
              <div class="line-wrapper">
                <span>新密码：</span>
                <input type="password" class="new-password">
                <div class="new-password-tip tip-wrapper"></div>
              </div>
              <div class="line-wrapper">
                <span>确认密码：</span>
                <input type="password" class="confirm-password">
                <div class="confirm-password-tip tip-wrapper"></div>
              </div>
              <div class="confirm-btn gray">确定</div>
            </div>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleComponent from '../titleComponent/titleComponent.vue'
  export default{
    components: {
      titleComponent
    }
  }
</script>

<style lang="less">
  @import "changePwd.less";
</style>
