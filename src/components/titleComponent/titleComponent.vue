<template>
  <el-row>
    <el-col :span="24" class="title">{{ titleText }}</el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'titleComponent',
    props: {
      titleText: {
        type: String,
        default: '标题'
      }
    }
  }
</script>

<style lang="less">
  @import 'titleComponent.less';
</style>
