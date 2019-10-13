<template>
    <div>
        <div class="mynav">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                background-color="#252c35"
                text-color='#ccc'
                active-text-color="#ffffff"
                class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>用户管理</span>
                    </template>    
                    <router-link to='/first'><el-menu-item index="1-1">用户信息</el-menu-item></router-link>
                    <router-link to='/second'><el-menu-item index="1-2">信息管理</el-menu-item></router-link>     
                    <router-link to='/third'><el-menu-item index="1-3">添加用户</el-menu-item></router-link>     
                </el-submenu>
                 <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-microphone"></i>
                    <span>歌曲管理</span>
                    </template>    
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>     
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>歌手管理</span>
                    </template>    
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>     
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                    <i class="el-icon-video-camera"></i>
                    <span>mv管理</span>
                    </template>    
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>     
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</div>

</template>

<script>
export default {
    name:'homeAside',
    data(){
        return{
            res:[]
        }
    },
    methods:{
        // handleOpen(key, keyPath) {
        //     console.log(key, keyPath);
        // },
        // handleClose(key, keyPath) {
        //     console.log(key, keyPath);
        // }
    }
}
</script>

<style scoped>
    .el-menu-vertical-demo{
        border: 0px;
    }
    .mynav{
        overflow: auto;
        box-sizing: border-box;
        position: absolute;
        padding-top: 82px;
        z-index: 1;
        width: 260px;
        height: 100%;
        box-sizing: border-box;
        background-color:#252c35;
    }
    .mynav::-webkit-scrollbar{
        display:none;   
    }
    .content{
        position: absolute;
        padding-top: 82px;
        padding-left: 260px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color:  #f5f5fa;
    }
</style>