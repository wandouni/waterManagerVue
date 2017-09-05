<template>
  <div class="page-wrapper">
    <titleComponent :titleText="'水务局查询和添加'"></titleComponent>
    <el-row>
      <el-col :span="24">
        <div class="info-wrapper">
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
          <div class="add-plants" @click="dialogFormVisible = true">添加水务局</div>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="厂商信息填写" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleComponent from '../titleComponent/titleComponent.vue'
  export default{
    data () {
      return {
        dialogFormVisible: false,
        form: {
          account: '',
          name: '',
          address: '',
          password: ''
        }
      }
    },
    components: {
      titleComponent
    }
  }
</script>

<style lang="less">
  @import "addFactory.less";
</style>
