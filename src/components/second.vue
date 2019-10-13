<template>
  <div class="user">
    <h1>用户管理</h1>
    <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    
    style="width: 100%">
    <el-table-column
      label="注册日期"
      prop="date"
      align="center">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name"
      align="center">
    </el-table-column>
    <el-table-column
      label="邮箱"
      prop="email"
      align="center">
    </el-table-column>
    <el-table-column
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button type="button" @click="dialogFormVisible = true;handleEdit(scope.$index, scope.row)" size="mini">编辑</el-button>

        <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm">
            <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="联系电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="注册日期" required>
    <el-col>
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="性别" prop="sex">
    <el-radio-group v-model="ruleForm.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;updateMessage()">确 定</el-button>
          </div>
        </el-dialog>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
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
        dialogTableVisible:false,
        dialogFormVisible: false,
        ruleForm: {
          name: '',
          email: '',
          phone: '',
          date1: '',
          sex: '',
          desc: ''
        },
        formLabelWidth: '120px',
        myid:'',
        length:''
      }
    },
    methods: {
      updateMessage(){
        let obj={
              name:this.ruleForm.name,
              email:this.ruleForm.email,
              phone:this.ruleForm.phone,
              sex:this.ruleForm.sex,
              date:this.ruleForm.date1,
              desc:this.ruleForm.desc
            }
        this.$http.put("http://localhost:3000/message/"+this.myid,obj)
              .then(response => {
                alert('修改成功！')
                window.location.reload()
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
          // console.log(this.search); 
          // this.data=response.data
        })
      },
      handleEdit(index, row) {
        // console.log(row.id)
        this.myid=row.id
        this.$http.get('http://localhost:3000/message/'+row.id)
            .then( response=>{
              console.log(this.ruleForm);
              this.ruleForm.name=response.data.name
              this.ruleForm.email=response.data.email
              this.ruleForm.phone=response.data.phone
              this.ruleForm.date1=response.data.date1
              this.ruleForm.sex=response.data.sex
              this.ruleForm.desc=response.data.desc
            })
      },
      handleDelete(index, row) {
        this.$http.delete('http://localhost:3000/message/'+row.id)
            .then(response=>{
              window.location.reload()
              alert('删除成功')
            })
        // console.log(index, row);
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
</style>