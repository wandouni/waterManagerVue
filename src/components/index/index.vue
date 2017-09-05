<template>
  <div class="page-wrapper">
    <titleComponent :titleText="'首页'"></titleComponent>
    <el-row>
      <el-col :span="24">
        <div class="total-data-wrapper">
          <el-row>
            <el-col :span="24" class="select-factory-wrapper">
              <selectFactory></selectFactory>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6" class="block">
              <el-row>
                <el-col :span="12">
                  <div class="icon water-icon"></div>
                </el-col>
                <el-col :span="12" class="content-wrapper">
                  <p class="key">用户月用水总量</p>
                  <p class="value water-value">- - -</p>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6" class="block">
              <el-row>
                <el-col :span="12">
                  <div class="icon money-icon"></div>
                </el-col>
                <el-col :span="12" class="content-wrapper">
                  <p class="key">用户月总金额</p>
                  <p class="value money-value">- - -</p>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6" class="block">
              <el-row>
                <el-col :span="12">
                  <div class="icon user-icon"></div>
                </el-col>
                <el-col :span="12" class="content-wrapper">
                  <p class="key">用户数量</p>
                  <p class="value user-value">- - -</p>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="paging-check-wrapper">
          <blankSideTitle :title="'实时统计表'"></blankSideTitle>
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
                label="表号">
              </el-table-column>
              <el-table-column
                prop="address"
                label="上月表数">
              </el-table-column>
              <el-table-column
                prop="address"
                label="本月表数">
              </el-table-column>
              <el-table-column
                prop="address"
                label="本月用量">
              </el-table-column>
              <el-table-column
                prop="address"
                label="用户名称">
              </el-table-column>
              <el-table-column
                prop="address"
                label="用户编号">
              </el-table-column>
              <el-table-column
                prop="address"
                label="用户地址">
              </el-table-column>
              <el-table-column
                prop="address"
                label="表机抄日期">
              </el-table-column>
              <el-table-column
                prop="address"
                label="表机抄时间">
              </el-table-column>
            </el-table>
            <div class="download-wrapper">
              <span class="text">下载表格</span>
              <a class="el-icon-upload2" href=""></a>
            </div>
            <el-row>
              <el-col :span="24" class="el-pagination-wrapper">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
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
  //  import axios from 'axios'
  import selectFactory from '../selectFactory/selectFactory.vue'
  import titleComponent from '../titleComponent/titleComponent.vue'
  import blankSideTitle from '../blankSideTitle/blankSideTitle.vue'
  export default{
    data () {
      return {currentPage: 5, tableData: []}
    },
    created () {
      /*      axios.get('/index').then((res) => {
       console.log(res)
       }) */
    },
    methods: {
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      }
    },
    components: {
      selectFactory,
      titleComponent,
      blankSideTitle
    }
  }
</script>

<style lang="less">
  @import "index.less";
</style>
