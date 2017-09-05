<template>
  <div class="info-title">
    <div class="info-title-text">{{ title}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'blankSideTitle',
    props: {
      title: {
        type: String,
        default: '标题'
      }
    }
  }
</script>

<style lang="less">
@import "blankSideTitle.less";
</style>
