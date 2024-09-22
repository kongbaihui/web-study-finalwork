<template>
  <div>
    <el-container style="height: 1300px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>导航</template
            >
            <el-menu-item-group>
              <template slot="title">用户信息</template>
              <el-menu-item index="1-1"
                ><router-link to="/file">用户信息</router-link></el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group title="日历">
              <el-menu-item index="1-2">
                <router-link to="/cal">日历</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="小游戏">
              <el-menu-item index="1-3"
                ><a href="/FinalHomework-fightmouse/HTML/index.html"
                  >打地鼠小游戏</a
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header
          style="
            height: 100px;
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          "
        >
          <div class="block" style="margin-top: 15px" @click="$router.push('/file');">
            <!-- 设置圆形头像 -->
            <el-avatar :size="70"
              ><span style="font-size: 20px"> user </span></el-avatar
            >
          </div>
          <strong style="font-size: 30">搜索界面</strong>
          <el-dropdown>
            <i
              class="el-icon-setting"
              style="margin-right: 15px; font-size: 20px; text-align: right"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><a href="/FinalHomework-fightmouse/HTML/signup.html"
                  >用户登录</a
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <!-- 主要内容 -->
        <el-main>
          <video autoplay loop muted playsinline>
            <source
              src="../../../public/FinalHomework-fightmouse/images/65801-515379581_large.mp4"
              type="video/mp4"
            />
          </video>
          <div class="search-box">
            <el-input placeholder="请输入搜索内容">
              <el-button slot="append" icon="el-icon-search">
                <router-link to="/home">搜索</router-link>
              </el-button>
            </el-input>
          </div>
          <div style="margin-top: 400px">
            <el-row :gutter="20">
              <el-col :span="8" v-for="card in cards" :key="card.title">
                <el-card
                  style="background-color: #d3d3d3"
                  class="card-container"
                >
                  <img
                    :src="card.image"
                    alt="卡片图片"
                    class="card-image"
                    @click="goToPage(card.link)"
                  />
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: '/images/videoframe_22101.png', 
          link: '/page11'                
        },
        {
          image: '/images/videoframe_2679.png',
          link: '/page12'
        },
        {
          image: '/images/videoframe_1407.png',
          link: '/page13'
        },
      ]
    };
  },
  methods: {
    goToPage(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 100px;
}

.el-aside {
  color: #333;
}

strong {
  font-size: 40px;
}

.search-box {
  height: 100px;
  max-width: 800px;
  margin: 0 auto;
}


video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.card-image {
  width: 100%;        /* 图片宽度占满卡片容器 */
  height: 200px;      /* 固定高度 */
  object-fit: cover;  /* 保持图片比例，裁剪多余部分 */
  cursor: pointer;    /* 鼠标悬停显示为可点击状态 */
}
.card-container {
  padding: 0;         /* 移除卡片的 padding 以紧贴图片 */
}

.el-col{
  margin: 20px auto;
  perspective: 1000px; /* 设置3D效果的视角 */
  transition: transform 0.5s ease, box-shadow 0.3s ease; /* 添加平滑的过渡效果 */
  transform: rotateY(0deg); /* 初始状态为无旋转 */
  transform-style: preserve-3d; /* 保持3D效果 */
}

.el-col:hover{
  transform: rotateY(10deg) rotateX(10deg) scale(1.05); /* 悬停时添加3D旋转效果和放大效果 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* 悬停时添加阴影 */
}
</style>