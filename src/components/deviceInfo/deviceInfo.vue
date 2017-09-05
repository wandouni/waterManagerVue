<template>
  <div class="page-wrapper">
    <titleComponent :titleText="表具信息"></titleComponent>
    <el-row>
      <el-col :span="24">
        <div class="total-data-wrapper">
          <div class="enter-year">
            <span>输入表号：</span>
            <input type="text" class="deviceNum-input" placeholder="例如：13699161406">
          </div>
          <searchBtn></searchBtn>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="paging-check-wrapper">
          <blankSideTitle :title="'信息列表'"></blankSideTitle>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleComponent from '../titleComponent/titleComponent.vue'
  import searchBtn from '../searchBtn/searchBtn.vue'
  import blankSideTitle from '../blankSideTitle/blankSideTitle.vue'
  export default{
    components: {
      titleComponent,
      searchBtn,
      blankSideTitle
    }
  }
</script>

<style lang="less">
  @import "deviceInfo.less";
</style>
