<template>

  <div class="container">
    <div> <h1 style="color: white;">当前选择的日期: {{ value }}</h1> <!-- 显示选定的日期 --> </div>

    <video autoplay loop muted playsinline>
      <source
        src="../../../public/images/background1.mp4"
        type="video/mp4"
      />
    </video>
    <el-container>
      <el-calendar v-model="value" @input="handleDateChange"> </el-calendar>
      


    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(), // 默认显示当前日期
    };
  },
  methods: {
    handleDateChange(value) {
      console.log('用户选择的日期:', value); 
    },
  },
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

.container {
  display: grid;
  place-items: center; /* 水平和垂直居中 */
  height: 100vh; /* 父容器占满视口高度 */
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
