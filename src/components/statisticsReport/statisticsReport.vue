<template>
  <div class="page-wrapper">
    <titleComponent :titleText="'统计报表'"></titleComponent>
    <el-row>
      <el-col :span="24">
        <div class="search-wrapper">
          <div class="device-number">
            <span>输入表号：</span>
            <input type="text" class="device-number-input" placeholder="例如：13699161406">
          </div>
          <div class="enter-year" id="enter-year">
            <span class="text">选择起止日期：</span>
            <!--<input type="text" class="start-year" id="start-year" placeholder="2016-01-01">-->
            <el-date-picker
              v-model="value0"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0">
            </el-date-picker>
            <span> - </span>
            <!--<input type="text" class="end-year" id="end-year" placeholder="2017-01-01">-->
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
          <div class="search-tip"></div>
          <div class="search-btn-wrapper">
            <div class="search-btn">搜 索</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="table-wrapper">
          <div class="info-title">
            <div class="info-title-text">图表</div>
          </div>
          <div class="table-content">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="序号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="水表表号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="用水量">
              </el-table-column>
              <el-table-column
                prop="address"
                label="金额">
              </el-table-column>
              <el-table-column
                prop="address"
                label="统计时间">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleComponent from '../titleComponent/titleComponent.vue'
  export default{
    data () {
      return {
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        pickerOptions1: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        value0: '',
        value1: ''
      }
    },
    components: {
      titleComponent
    }
  }
</script>

<style lang="less">
  @import "statisticsReport.less";
</style>
