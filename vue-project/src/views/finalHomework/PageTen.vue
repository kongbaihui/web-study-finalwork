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
            src="../../../public/images/bird6.png" 
            controls
            class="video-player"
          ></video>

                  <!-- 黄鹀介绍 -->
        <div class="bird-info">
          <h2>黄鹀（Emberiza citrinella）简介</h2>
          <p>
            黄鹀（学名：Emberiza citrinella），是一种小型鸣禽，广泛分布于欧洲和亚洲。它们的羽毛以黄色为主，尤其是雄性，头部和腹部的黄色特别醒目。黄鹀经常出现在开阔的田野和草地中，并且喜欢在灌木丛和矮树上筑巢。
          </p>
          <p>
            黄鹀以种子和昆虫为食，春季是繁殖的季节，雄鸟会通过鸣唱来吸引配偶。它们的歌声非常独特，是辨认黄鹀的一大标志。黄鹀的生活习性非常灵活，能够适应多种栖息环境，但它们更喜欢开阔的农田和草地。
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
  