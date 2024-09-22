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
          src="../../../public/images/bird9.mp4" 
          controls
          class="video-player"
        ></video>

        <div class="bird-info">
          <h2>巨嘴鸟（Toco Toucan）</h2>
          <p><strong>学名:</strong> Ramphastos toco</p>
          <p><strong>分布区域:</strong> 主要分布在南美洲的巴西、阿根廷、巴拉圭和乌拉圭等地的热带雨林中。</p>
          <p><strong>体型:</strong> 成鸟体长约55-60厘米，体重约600-700克。最大的特征是其鲜艳的喙，长度可以达到25厘米。</p>
          <p><strong>颜色:</strong> 羽毛通常是黑色的，带有白色的腹部和橙色的喙，喙的根部通常是黑色的。</p>
          <p><strong>饮食:</strong> 主要以果实为食，也吃昆虫、鸟蛋和小型动物。</p>
          <p><strong>习性:</strong> 生活在树顶上，善于攀爬和飞行，常常组成小群体活动。</p>
          <p><strong>叫声:</strong> 发出响亮的、类似于“咯咯”的叫声。</p>
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

.bird-info {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.el-menu-item {
  padding: 0 20px; /* 设置菜单项之间的间距 */
}

.el-main {
  padding-top: 20px; /* 确保视频内容不会与头部重叠 */
}
</style>
