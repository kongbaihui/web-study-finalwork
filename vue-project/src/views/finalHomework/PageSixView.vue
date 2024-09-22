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
            ><router-link to="/my">关于我</router-link></el-menu-item>
          <el-menu-item index="4"
            ><router-link to="/serve">服务</router-link></el-menu-item
          >
          <el-menu-item index="5"
            ><router-link to="/contact">联系我</router-link></el-menu-item>
        </el-menu>
      </el-header>
      
      <!-- 视频播放 -->
      <el-main style="padding-top: 20px;">
        <video 
          src="../../../public/images/bird2.mp4" 
          controls
          class="video-player"
        ></video>

        <!-- 金刚鹦鹉介绍 -->
        <div class="bird-info">
          <h2>金刚鹦鹉简介</h2>
          <p>
            金刚鹦鹉（学名：Ara）是体型较大的鹦鹉，属于鹦鹉科。它们主要分布在中南美洲的热带雨林。金刚鹦鹉以其艳丽的羽毛和极高的智力闻名，常见的颜色包括红色、蓝色、黄色等。金刚鹦鹉是非常社交的鸟类，通常成群结队活动，它们擅长模仿声音，甚至可以模仿人类的语言。
          </p>
          <p>
            金刚鹦鹉的寿命很长，有的可以活到50年以上。它们是忠实的伴侣鸟类，但由于对栖息地的破坏和非法捕捉，许多金刚鹦鹉物种面临濒危的境地。作为一种保护动物，它们需要人类更多的关注和保护。
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
