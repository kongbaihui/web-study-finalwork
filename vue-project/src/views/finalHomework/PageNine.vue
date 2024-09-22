<template>
    <div>
      <el-container style="height: 100vh;">
      <!-- 头部导航栏 -->
      <el-header class="fixed-header">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          class="menu"
        >
          <el-menu-item index="1"
            ><router-link to="/search">搜索页</router-link></el-menu-item
          >
          <el-menu-item index="2"
            ><router-link to="/home">首页</router-link></el-menu-item
          >
          <el-menu-item index="3"
            ><router-link to="/my">关于我</router-link>
          </el-menu-item>
          <el-menu-item index="4"
            ><router-link to="/serve">服务</router-link></el-menu-item
          >
          <el-menu-item index="5"
            ><router-link to="/contact">联系我</router-link></el-menu-item
          >
        </el-menu>
      </el-header>
        <el-main style="padding-top: 20px;">
          <video 
            src="../../../public/images/bird5.mp4" 
            controls
            class="video-player"
          ></video>

                  <!-- 绿喉蜂虎介绍 -->
        <div class="bird-info">
          <h2>绿喉蜂虎（Merops orientalis）简介</h2>
          <p>
            绿喉蜂虎（学名：Merops orientalis），是一种小型翠绿色的鸟类，广泛分布于非洲、南亚和东南亚地区。它们的体型修长，羽毛主要为翠绿色，喉部呈现明亮的绿色，眼睛周围有一条深色的条纹。它们的尾羽细长，具有明显的尖端。
          </p>
          <p>
            绿喉蜂虎以捕食飞行中的昆虫为生，尤其喜欢蜜蜂。它们会从树枝或电线等高处俯冲下来，快速捕捉空中的昆虫，觅食时的敏捷和精准令人惊叹。绿喉蜂虎多栖息在开阔的草地、林缘地带和河流附近，是鸟类摄影爱好者的常见拍摄对象。
          </p>
        </div>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoComponent',
  mounted() {
    // 检查 sessionStorage 中是否已刷新过该页面
    if (!sessionStorage.getItem('reloaded')) {
      // 如果没有，刷新页面并设置 sessionStorage
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
  },
  beforeDestroy() {
    // 在离开页面前，清除 sessionStorage，以便下次跳转仍可刷新
    sessionStorage.removeItem('reloaded');
  }
  };
  </script>
  
  <style scoped>
  .video-player {
    width: 100%;      /* 让视频占满父容器的宽度 */
    height: auto;     /* 高度自动调整，保持视频比例 */
    max-height: 500px; /* 限制视频的最大高度 */
    display: block;   /* 视频在块级元素中显示，确保布局正常 */
    margin: 0 auto;   /* 居中视频 */
  }
  
  .fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff; /* 确保头部有背景色 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影，使其看起来更美观 */
}

.menu {
  display: flex;
  justify-content: space-around; /* 菜单项均匀分布 */
}

.el-menu-item {
  padding: 0 20px; /* 设置菜单项之间的间距 */
}
  
  .el-main {
    padding-top: 20px; /* 确保视频内容不会与头部重叠 */
    background-color: aquamarine;
  }

  .bird-info {
  margin-top: 20px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto; /* 居中简介信息 */
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9); /* 背景色 */
  padding: 20px; /* 内边距 */
  border-radius: 8px; /* 圆角 */
}

.bird-info h2 {
  font-size: 24px;
  color: #2c3e50;
}

.bird-info p {
  line-height: 1.6;
  color: #333;
}
  </style>
  