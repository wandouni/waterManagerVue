<template>
  <div class="page-wrapper">
    <titleComponent :titleText="'表具查询'"></titleComponent>
    <el-row>
      <el-col :span="24">
        <div class="search-wrapper">
          <selectFactory></selectFactory>
          <div class="enter-year">
            输入表号：<input type="text" class="device-number" placeholder="例如：13699161406">
            输入安装地址：<input type="text" class="install-address" placeholder="例如：莲路沙涌村段36号">
          </div>
          <span class="search-tip"></span>
          <div class="search-btn-wrapper">
            <span class="search-btn">搜 索</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="paging-check-wrapper">
          <blankSideTitle :title="'查询统计表'"></blankSideTitle>
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
            <el-row>
              <el-col :span="24" class="el-pagination-wrapper">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000">
                </el-pagination>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleComponent from '../titleComponent/titleComponent.vue'
  import selectFactory from '../selectFactory/selectFactory.vue'
  import blankSideTitle from '../blankSideTitle/blankSideTitle.vue'
  export default{
    components: {
      titleComponent,
      selectFactory,
      blankSideTitle
    }
  }
</script>

<style lang="less">
  @import "deviceCheck.less";
</style>
