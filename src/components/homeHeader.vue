<template>
    <div>
        <span class="logo"><img src="../assets/musicpic.png" alt="#" height="50px"><h1>享听音乐</h1></span>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" class="search" size="medium">
        </el-input><el-button size="medium" class="btn">GO</el-button>
        <span class="userimg"><img src="../assets/user2.png" alt=""></span>
        <el-dropdown trigger="click" class="users">
            
            <span class="el-dropdown-link">
                管理员<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user-solid">个人信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-message-solid">消息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-tools">设置</el-dropdown-item>
                <el-dropdown-item icon="el-icon-error">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name:'homeHeader',
    data(){
        return{
            input:''
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .search{
        width: 200px;
        position: absolute;
        top: 22px;
        left: 400px;
    }
    .el-input__inner-my{
        height: 34px;
    }
    .btn{
        position: absolute;
        top: 22px;
        left: 600px;
        background-color: #00AAFF;
        border-color: #00a0f0;
        color:#fff;
        box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.2);
    }
    .btn:hover{
        background-color: #00a0f0;
        border-color: #00a0f0;
    }
    .logo{
        position: absolute;
        display: flex;
        height: 50px;
        left: 50px;
        top:16px;
    }
    .logo h1{
        font-weight: 400;
        font-size: 24px;
        line-height: 50px;
        /* display: inline-block;
        position: absolute;
        top: 50%;
        margin-top: -20px; */
    }
    .users{
        position: absolute;
        top: 30px;
        left: 1040px;
    }
    .el-dropdown-link {
        cursor: pointer;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .userimg{
        display: inline-block;
        width: 36px;
        height: 36px;
        border-radius: 100%;
        overflow: hidden;
        position: absolute;
        top: 23px;
        left: 1000px;
    }
    .userimg img{
        width: 36px;
        display: block;
    }
</style>