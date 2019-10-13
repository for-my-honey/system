<template>
  <div class="bd">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        <el-button class="btn-reg" @click="register()">注册</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },

        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    methods: {
      register(){
        this.$router.push({path:'/register'})
      },
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('http://localhost:3000/user',{
              params:{username:this.form.username,
              password:this.form.password}
            }).then((response) => {
              // console.log(response.data);
              if(response.data.length != 0){
                this.$router.push({path:'/first'})
              }else{
                alert('账号或密码错误');
              }
              // console.log(response.statusText);
              
            // var myuser=response.data[0];
            // if(myuser.username==this.form.username && myuser.password==this.form.password){
            //   this.$router.push({path:'/first'})
            // }else{
            //   alert('账号或密码错误');
              
            // }
            // console.log(arr);
            
          })
            } else {
              this.dialogVisible = true;
              return false;
            }
          });
        }
    		//登录一般用post请求。
    		//post 新增   put  修改
    		//get 查询   delete 删除
    		
//     		this.$http.get("http://localhost:3000/user",{
//     			params:{username:this.form.username,
//     			password:this.form.password		}
    				
//     		}).then(
//     			function(result){
//     				console.log(result.bodyText);
//     			var flag = result.bodyText;
// 			 		if(flag=='username_or_password_no'){
// 			 			alert("用户名或密码不正确或不存在");
// 			 			this.user={
// 			 				username:'',
// 							passowrd:''
// 			 			};
// 						this.$router.push({path:'/'})
// 					}
// //			 		else{
// 							if(flag=='success'){
// 							alert("登陆成功");
// 							this.$router.push({path:'/nave'})
// 							}
// 					 		if(flag=='status_no'){
// 							alert("其他管理员未同意或不同意");
// 							this.$router.push({path:'/'})
// 							}
// 					 		if(flag=='no_admin'){
// 							alert("用户名或密码不正确或不存在");
// 							this.$router.push({path:'/'})
// 							}
// //						}
	
//     		},function(result){
//     			alert("加载失败");
    		
//     		})
     }
  }
</script>
<style scoped>
  .btn-reg{
    margin-left: 60px;
  }
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 150px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
  .bd{
    background-color: #f5f5fa;
  }
</style>

