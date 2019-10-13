<template>
  <div class="user">
    <h1>用户信息</h1>
    <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{ props.row.sex }}</span>
          </el-form-item>
          <el-form-item label="邮箱">
            <span>{{ props.row.email }}</span>
          </el-form-item>
          <el-form-item label="手机号码">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="注册日期">
            <span>{{ props.row.date }}</span>
          </el-form-item>
          <el-form-item label="备注">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="ID"
      prop="id"
      align="center">
    </el-table-column>
    <el-table-column
      label="用户名"
      prop="name"
      align="center">
    </el-table-column>
    <el-table-column
      label="邮箱"
      prop="email"
      align="center">
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :currentPage="currentPage"
      :page-size="pagesize"
      layout="prev, pager, next, jumper"
      :total="this.length">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
    name:'second',
    data() {
      return {
        currentPage:1,
        pagesize:6,
        tableData: [],
        search: '',
        index:'',
        length:''
      }
    },
    methods: {
      getMessages(){
        // alert('111111')
        
        this.$http.get('http://localhost:3000/message/1')
            .then(response => {
              // console.log(response);
              this.gridData.name=response.data.name
              console.log(this.gridData.name);
              
            })
      },
      handleSizeChange(val) {
        this.pagesize=val;
      },
      handleCurrentChange(val) {
        this.currentPage=val;
      },
      getMessage(){
        this.$http.get('http://localhost:3000/message')
            .then( response => {
              this.length=response.data.length
          // console.log(response.data[index].date);
          this.tableData=response.data;
          // this.index=response.data.id;
          // console.log(response.data);
          
          // console.log(this.search); 
          // this.data=response.data
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    created(){
      this.getMessage();
    }
}
</script>

<style scoped>
  .user{
    margin: 15px;
    position: relative;
  }
  .block{
    position: absolute;
    bottom: -60px;
    left: 200px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>