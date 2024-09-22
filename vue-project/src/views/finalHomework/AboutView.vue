<template>
  <div>
    <el-container>
      <!-- 表头 -->
      <el-header>
        <el-page-header @back="goBack" content="个人信息" class="custom-header">
        </el-page-header>
      </el-header>
      <el-main>
        <el-empty description="空空如也"></el-empty>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.location.href = "SearchView.vue";
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 20px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.custom-header .el-page-header__title {
  margin-top: 10px;
  font-size: 24px; /* 自定义标题字体大小 */
}

.custom-header .el-page-header__content {
  margin-top: 10px;
  font-size: 24px; /* 自定义描述字体大小 */
  font-weight: bold;
}
</style>