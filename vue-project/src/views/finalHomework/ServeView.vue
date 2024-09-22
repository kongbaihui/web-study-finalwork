<template>
    <div class="service-page">
      <el-container>
        <!-- 服务标题 -->
        <el-header class="service-header">
          <h1>我们的服务</h1>
          <p>我们为您提供最优质的服务</p>
        </el-header>
  
        <!-- 服务内容 -->
        <el-main>
          <el-row :gutter="20">
            <!-- 单个服务卡片 -->
            <el-col :span="8" v-for="service in services" :key="service.title">
              <el-card shadow="always" class="service-card">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            title: '网站开发',
            description: '该网站为测试网站开发和设计服务。',
          },
          {
            title: '游戏玩法',
            description: '该网站为平台提供高质量的游戏玩法服务。',
          },
          {
            title: '鸟类拍摄',
            description: '通过自然鸟类拍摄，提升大众对鸟类认知。',
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .service-page {
    padding: 40px 20px;
    background-color: #f9f9f9;
  }
  
  .service-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .service-header h1 {
    font-size: 32px;
    color: #333;
  }
  
  .service-header p {
    font-size: 18px;
    color: #777;
  }
  
  .service-card {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
    perspective: 1000px; /* 设置3D效果的视角 */
    transition: transform 0.5s ease, box-shadow 0.3s ease; /* 添加平滑的过渡效果 */
    transform: rotateY(0deg); /* 初始状态为无旋转 */
    transform-style: preserve-3d; /* 保持3D效果 */
    
  }
  
  .service-card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    perspective: 1000px; /* 设置3D效果的视角 */
    transform: rotateY(10deg) rotateX(10deg) scale(1.05); /* 悬停时添加3D旋转效果和放大效果 */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* 悬停时添加阴影 */
  }
  
  .service-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
  </style>
  