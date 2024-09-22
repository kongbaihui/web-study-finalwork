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
          src="../../../public/images/bird10.png" 
          controls
          class="video-player"
        ></video>

        <div class="bird-info">
          <h2>火尾霸鹟（Vermilion Flycatcher）</h2>
          <p><strong>学名:</strong> Pyrocephalus rubinus</p>
          <p><strong>分布区域:</strong> 主要分布在美洲，包括北美洲南部、墨西哥、中美洲和南美洲的广泛区域。</p>
          <p><strong>体型:</strong> 体长约13-15厘米，体重约11-14克，属于小型鸟类。</p>
          <p><strong>颜色:</strong> 雄鸟拥有亮丽的红色头部、胸部和腹部，背部和翅膀为黑色。雌鸟的颜色较为朴素，以灰褐色为主。</p>
          <p><strong>饮食:</strong> 主要以昆虫为食，常通过在空中捕捉飞行的昆虫来获取食物。</p>
          <p><strong>习性:</strong> 火尾霸鹟通常在开阔的栖息地，如草地和农田，喜欢栖息在树枝上并等待猎物出现。</p>
          <p><strong>栖息地:</strong> 火尾霸鹟适应广泛的栖息地，从沙漠到湿地、草原到低山森林都有它们的踪影。</p>
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

.el-main {
  padding-top: 20px; /* 确保视频内容不会与头部重叠 */
  background-color: aquamarine;
}
</style>
