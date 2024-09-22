<template>
    <div class="user-info">
      <el-card class="user-card" shadow="always">
        <div slot="header" class="card-header">
          <span>用户信息</span>
        </div>
        <el-row>
            <div class="block" style="margin-top: 15px">
            <!-- 设置圆形头像 -->
            <el-avatar :size="70"
              ><span style="font-size: 10px">John Doe</span></el-avatar
            >
          </div>
          <el-col :span="16">
            <el-descriptions title="个人资料" column="2" bordered>
                用户名：<el-descriptions-item label="用户名">John Doe</el-descriptions-item>
              <br>
              邮箱：<el-descriptions-item label="邮箱">john.doe@example.com</el-descriptions-item>
              <br>
              电话：<el-descriptions-item label="电话">123-456-7890</el-descriptions-item>
              <br>
              地址：<el-descriptions-item label="地址">美国纽约市</el-descriptions-item>
              <br>
              注册日期：<el-descriptions-item label="注册日期">2024-09-12</el-descriptions-item>
            </el-descriptions>
            <div class="button-group">
              <el-button type="primary" @click="editProfile">编辑资料</el-button>
              <br>
              <br>
              <el-button @click="logout">登出</el-button>
              <br>
              <br>
              <el-button @click="out">返回</el-button>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserInfo',
    methods: {
      editProfile() {
        // 处理编辑用户资料的逻辑
        console.log('编辑用户资料');
      },
      logout() {
        // 处理用户登出的逻辑
        console.log('用户登出');
      },
      out() {
        //退出
        window.location.href='SearchView.vue';
      }
    }
  }
  </script>
  
  <style scoped>
  .user-info {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }
  
  .user-card {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .card-header {
    font-size: 18px;
    font-weight: bold;
  }
  
  .avatar-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .el-avatar {
    border: 2px solid #409EFF;
  }
  
  .button-group {
    margin-top: 20px;
  }
  
  .el-button {
    margin-right: 10px;
  }
  </style>
  