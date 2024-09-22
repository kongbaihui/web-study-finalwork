<template>
  <div id="app">
    <el-container>
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

      <!-- 轮播图 -->
      <el-main>

        <div class="search-box">
          <el-input placeholder="请输入搜索内容">
            <el-button slot="append" icon="el-icon-search">
              <router-link to="/home">搜索</router-link>
            </el-button>
          </el-input>
        </div>


        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <img
              v-if="index === 0"
              src="../../../public/images/bird7.png"
              alt="图片 1"
              class="carousel-image"
              @click="goToPage('/page1')"
            />
            <img
              v-else-if="index === 1"
              src="../../../public/images/bird8.png"
              alt="图片 2"
              class="carousel-image"
              @click="goToPage('/page2')"
            />
            <img
              v-else-if="index === 2"
              src="../../../public/images/bird9.png"
              alt="图片 3"
              class="carousel-image"
              @click="goToPage('/page3')"
            />
            <img
              v-else-if="index === 3"
              src="../../../public/images/bird10.png"
              alt="图片 4"
              class="carousel-image"
              @click="goToPage('/page4')"
            />
          </el-carousel-item>
        </el-carousel>
      </el-main>

      <!-- 卡片布局 -->
      <el-main>
        <video autoplay loop muted playsinline>
          <source
            src="../../../public/FinalHomework-fightmouse/images/65801-515379581_large.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <h1 style="font-size:50px">自然鸟类拍摄大赏</h1>
        </div>

        <el-row :gutter="30">
          <el-col :span="8">
            <el-card class="animated-card" shadow="hover">
              <img src="../../../public/images/bird1.png" alt="卡片图片" class="card-image" @click="goToPage('/page5')" />
              <h4>绣眼鸟</h4>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card class="animated-card" shadow="hover">
              <img src="../../../public/images/bird2.png" alt="卡片图片" class="card-image" @click="goToPage('/page6')" />
              <h4>金刚鹦鹉</h4>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card class="animated-card" shadow="hover">
              <img src="../../../public/images/bird3.png" alt="卡片图片" class="card-image" @click="goToPage('/page7')" />
              <h4>靛颏</h4>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card class="animated-card" shadow="hover">
              <img src="../../../public/images/bird4.png" alt="卡片图片" class="card-image" @click="goToPage('/page8')"/>
              <h4>靛颏</h4>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card class="animated-card" shadow="hover">
              <img src="../../../public/images/bird5.png" alt="卡片图片" class="card-image" @click="goToPage('/page9')"/>
              <h4>绿喉蜂虎</h4>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card class="animated-card" shadow="hover">
              <img src="../../../public/images/bird6.png" alt="卡片图片" class="card-image" @click="goToPage('/page10')"/>
              <h4>黄鹀</h4>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <!-- 页脚 -->
      <el-footer>
        <span>© 2024 My Website 版权所有</span>
        <br />
        <span>侵权必删</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "2",
      carouselItems: ["图片1", "图片 2", "图片 3", "图片 4"],
    };
  },
  methods: {
    goToPage(pageUrl) {
      this.$router.push(pageUrl);
    }
  }
};
</script>


<style>
video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.carousel-content {
  font-size: 24px;
  line-height: 300px;
  text-align: center;
  color: #fff;
  background-color: #409eff;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: white;
  text-align: center;
  line-height: 30px;
}

.search-box {
  height: 100px;
  max-width: 800px;
  margin: 50px auto;
}


.el-main {
  margin-bottom: 60px;
}

.carousel-image {
  width: 75%; /* 图片宽度自适应 */
  height: 400px; /* 固定高度 */
  object-fit: cover; /* 保持比例，裁剪溢出的部分 */
  cursor: pointer; /* 鼠标悬停显示为可点击状态 */
}

/* 图片样式，适应卡片布局 */
.card-image {
  width: 100%; /* 图片宽度自适应 */
  height: 400px; /* 固定高度 */
  object-fit: cover; /* 保持比例，裁剪溢出的部分 */
  cursor: pointer; /* 鼠标悬停显示为可点击状态 */
}

/* 卡片动态效果 */
.animated-card {
  width: 500px;
  margin: 20px auto;
  perspective: 1000px; /* 设置3D效果的视角 */
  transition: transform 0.5s ease, box-shadow 0.3s ease; /* 添加平滑的过渡效果 */
  transform: rotateY(0deg); /* 初始状态为无旋转 */
  transform-style: preserve-3d; /* 保持3D效果 */
}

.animated-card:hover {
  transform: rotateY(10deg) rotateX(10deg) scale(1.05); /* 悬停时添加3D旋转效果和放大效果 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* 悬停时添加阴影 */
}

</style>