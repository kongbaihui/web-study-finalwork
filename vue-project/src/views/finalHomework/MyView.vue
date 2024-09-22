<template>
  <div class="about-page">
    <el-container>
      <!-- 页面标题 -->
      <el-header class="about-header">
        <h1>关于我与项目</h1>
      </el-header>

      <!-- 公司简介 -->
      <el-main class="about-main">
        <el-row>
          <el-col :span="12">
            <el-card class="about-card">
              <h1>项目简介</h1>
              <h2>这是一个致力于提供最优质的产品和服务的网页项目。它的使命是为测试网站开发和设计服务，提升大众对鸟类的认知，结交其他喜爱拍摄鸟类的朋友，为鸟类拍摄提供一个舞台。</h2>
            </el-card>
          </el-col>
        </el-row>

          <!-- 团队成员 -->
        <el-col :span="12">
            <el-card class="about-card">
              <h2>我们的团队</h2>
              <el-row :gutter="20">
                <el-col :span="8" v-for="member in teamMembers" :key="member.name">
                  <el-card class="team-member-card">
                    <h3>{{ member.name }}</h3>
                    <p>{{ member.role }}</p>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          name: '***',
          role: '项目组组长',
        }
      ]
    };
  }
};
</script>

<style scoped>
.about-page {
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.about-header {
  text-align: left;
  margin-bottom: 40px;
}

.about-header h1 {
  font-size: 32px;
  color: #333;
}

.about-header p {
  font-size: 18px;
  color: #777;
}

.about-card {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}

.team-member-card {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  width: 150px;  perspective: 1000px; /* 设置3D效果的视角 */
  transition: transform 0.5s ease, box-shadow 0.3s ease; /* 添加平滑的过渡效果 */
  transform: rotateY(0deg); /* 初始状态为无旋转 */
  transform-style: preserve-3d; /* 保持3D效果 */
}

.team-member-card:hover{
  transform: rotateY(10deg) rotateX(10deg) scale(1.05); /* 悬停时添加3D旋转效果和放大效果 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* 悬停时添加阴影 */
}


</style>
