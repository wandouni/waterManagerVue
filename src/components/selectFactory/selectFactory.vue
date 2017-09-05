<template>
  <div class="select-factory">选择水务局:
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {value: '', options: []}
    },
    name: 'selectFactory'
  }
</script>

<style lang="less">
  @import "selectFactory.less";
</style>
