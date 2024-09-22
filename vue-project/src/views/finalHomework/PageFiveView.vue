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
            ><router-link to="/serve">服务</router-link></el-menu-item>
          <el-menu-item index="5"
            ><router-link to="/contact">联系我</router-link></el-menu-item>
        </el-menu>
      </el-header>

      <el-main class="content-background">
        <!-- 视频播放 -->
        <video 
          src="../../../public/images/bird1.mp4" 
          controls
          class="video-player"
        ></video>

        <!-- 绣眼鸟简介 -->
        <div class="bird-info">
          <h2>绣眼鸟简介</h2>
          <p>
            绣眼鸟是一种体型小巧、体态优美的鸟类，常见于东亚地区，因其眼周围有一圈白色羽毛，宛如眼睛戴着白色的“眼镜”而得名。绣眼鸟的主要栖息地为树林、灌丛、果园等地，喜欢在花丛和果树上觅食。它们通常以花蜜、果实和昆虫为食。绣眼鸟性情活泼，喜欢成群结队活动，鸣叫声悦耳动听，是许多人喜爱的观赏鸟。
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
  background-color: rgba(255, 255, 255, 0.8); /* 背景色 */
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