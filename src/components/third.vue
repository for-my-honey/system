<template>
  <div class="user">
    <h1>添加用户</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm myform">
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
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
    name:'third',
    data() {
      return {
        ruleForm: {
          name: '',
          email: '',
          phone: '',
          date1: '',
          sex: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          email: [
            { type:"email",required: true, message: '请输入准确的邮箱地址', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          desc: [
            { required: false, message: '请填写备注', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let obj={
              name:this.ruleForm.name,
              email:this.ruleForm.email,
              phone:this.ruleForm.phone,
              sex:this.ruleForm.sex,
              date:this.ruleForm.date1,
              desc:this.ruleForm.desc
            }
            // alert('submit!');
            this.$http.post("http://localhost:3000/message",obj)
                .then(response => {
                  alert('添加成功！');
                  this.$router.push('/second');
                })
          } else {
            console.log('检查信息是否准确！');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
  .user{
    margin: 15px;
  }
  .myform{
    background-color: #fff;
    margin: 10px 50px;
    padding-top: 10px;
  }
  .el-input__inner{
    border:1px solid #ccc;
  }
</style>