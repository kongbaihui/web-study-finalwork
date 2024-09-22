<template>
    <div class="contact-us">
    <el-container>
      <!-- 联系方式部分 -->
      <el-main>
        <el-row :gutter="20">
          <!-- 联系方式 -->
          <el-col :span="24">
            <el-card shadow="always" class="contact-card">
              <h2>联系我</h2>
              <p><strong>公司地址:</strong> 1234 公司路，商务区，北京，中国</p>
              <p><strong>电话:</strong> 123-456-7890</p>
              <p><strong>邮箱:</strong> info@example.com</p>
              <p><strong>营业时间:</strong> 周一至周五，9:00 - 18:00</p>
            </el-card>
          </el-col>
        </el-row>

        <!-- 地图部分 -->
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card shadow="always" class="map-card">
              <iframe
                width="100%"
                height="300"
                frameborder="0"
                style="border:0"
                src="https://www.amap.com/?q=39.9042,116.4074"
                allowfullscreen>
              </iframe>
            </el-card>
          </el-col>
        </el-row>

        <!-- 联系表单部分 -->
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card shadow="always" class="form-card">
              <h2>发送留言</h2>
              <el-form :model="form" :rules="rules" ref="contactForm" label-width="100px">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="form.email" placeholder="请输入您的邮箱"></el-input>
                </el-form-item>
                <el-form-item label="信息" prop="message">
                  <el-input
                    type="textarea"
                    v-model="form.message"
                    placeholder="请输入您的留言"
                    rows="4">
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm">提交</el-button>
                  <el-button @click="resetForm">重置</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] }
          ],
          message: [
            { required: true, message: '请输入留言内容', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.contactForm.validate((valid) => {
          if (valid) {
            this.$message({
              message: '表单提交成功！',
              type: 'success'
            });
          } else {
            this.$message({
              message: '请检查表单内容',
              type: 'warning'
            });
          }
        });
      },
      resetForm() {
        this.$refs.contactForm.resetFields();
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-us {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.contact-card,
.map-card,
.form-card {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

iframe {
  border-radius: 5px;
}

.el-input {
  width: 100%;
}

.el-button {
    margin-right: 10px;
}
  </style>
  