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
          src="../../../public/images/bird8.mp4" 
          controls
          class="video-player"
        ></video>

        <div class="bird-info">
          <h2>安第斯蜂鸟（Andean Hillstar）</h2>
          <p><strong>学名:</strong> Oreotrochilus chimborazo</p>
          <p><strong>分布区域:</strong> 主要分布在南美洲的安第斯山脉中，海拔较高的区域，尤其是在秘鲁、厄瓜多尔和哥伦比亚等国家。</p>
          <p><strong>体型:</strong> 安第斯蜂鸟属于中小型蜂鸟，体长约11-13厘米，体重约8克。</p>
          <p><strong>颜色:</strong> 雄鸟具有亮丽的紫色头冠和绿色的背部，雌鸟则是褐色羽毛，腹部带有灰白色。</p>
          <p><strong>饮食:</strong> 主要以花蜜为食，也会捕捉小昆虫作为蛋白质来源。</p>
          <p><strong>习性:</strong> 擅长悬停飞行，可以在空中静止不动，快速拍打翅膀，同时用细长的喙吸食花蜜。</p>
          <p><strong>栖息地:</strong> 安第斯蜂鸟适应寒冷的高山环境，常栖息在海拔3000米以上的地区。</p>
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
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
