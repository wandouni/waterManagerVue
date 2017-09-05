<template>
  <div class="page-wrapper">
    <titleComponent :titleText="'用量月报表'"></titleComponent>
    <el-row>
      <el-col :span="24">
        <div class="total-data-wrapper">
          <selectFactory></selectFactory>
          <div>选择年份：
            <el-date-picker
              v-model="yearValue"
              align="right"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </div>
          <searchBtn></searchBtn>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="paging-check-wrapper">
          <blankSideTitle :title="'月用量列表'"></blankSideTitle>
          <div class="table-content">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="name"
                label="水表表号">
              </el-table-column>
              <el-table-column
                prop="address"
                label="起始用量">
              </el-table-column>
              <el-table-column
                prop="address"
                label="累计用量">
              </el-table-column>
              <el-table-column
                prop="address"
                label="使用金额">
              </el-table-column>
              <el-table-column
                prop="address"
                label="价格类型">
              </el-table-column>
              <el-table-column
                prop="address"
                label="安装地址">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="paging-check-wrapper">
          <blankSideTitle :title="'月用量趋势图'"></blankSideTitle>
          <div class="line-content">

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleComponent from '../titleComponent/titleComponent.vue'
  import searchBtn from '../searchBtn/searchBtn.vue'
  import selectFactory from '../selectFactory/selectFactory.vue'
  import blankSideTitle from '../blankSideTitle/blankSideTitle.vue'
  export default{
    data () {
      return {
        yearValue: ''
      }
    },
    components: {
      titleComponent,
      selectFactory,
      searchBtn,
      blankSideTitle
    }
  }
</script>

<style lang="less">
@import "monthTable.less";
</style>
