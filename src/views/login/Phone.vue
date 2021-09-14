<template>
  <div class="phone-container">
    <div class="inputPhone">
      <!-- 国家号下拉框 -->
      <div class="countrySle">
        <el-dropdown>
          <span class="el-dropdown-link">
            中国 +86<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>美国 +1</el-dropdown-item>
            <el-dropdown-item>日本 +81</el-dropdown-item>
            <el-dropdown-item>加拿大 +1</el-dropdown-item>
            <el-dropdown-item>英国 +44</el-dropdown-item>
            <el-dropdown-item>新加坡 +65</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 手机输入框 -->
      <div class="phoneInput">
        <el-form :model="phoneForm"
                 :rules="phoneRules"
                 ref="LoginRef">
          <el-form-item prop="phoneNum">
            <el-input v-model="phoneForm.phoneNum"
                      placeholder="手机号"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 验证码输入 -->
    <div class="infoInput">
      <div>
        <el-form :model="infoForm"
                 :rules="phoneRules"
                 ref="infoRef">
          <el-form-item prop="info">
            <el-input v-model="infoForm.info"
                      placeholder="输入6位短信验证码"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span>获取短信验证码</span>
    </div>
    <!-- 登录按钮 -->
    <div class="phoneLoginBtn">
      <el-row>
        <el-button type="primary"
                   @click="login">登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      phoneForm: {
        phoneNum: '',
      },
      infoForm: {
        info: '',
      },
      phoneRules: {
        phoneNum: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            min: 8,
            max: 15,
            message: '长度在 8 到 15 个字符',
            trigger: 'blur',
          },
        ],
        info: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    ...mapActions(['loginFun']),
    login() {
      this.$refs.infoRef.validate((valid) => {
        if (valid) {
          this.loginFun(this.loginForm).then((obj) => {
            console.log(obj, 'obj')
            if (obj.suc) {
              this.$message.success('登陆成功')
              this.$router.push('/')
            } else {
              this.$message.error('登陆失败')
            }
          })
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.phone-container/deep/.el-input__inner {
  border: 0;
}
.phone-container {
  .countrySle {
    padding: 0 10px;
  }
  .inputPhone {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e3e4e5;
    padding-bottom: 20px;
    .el-form-item {
      margin: 0;
      border-left: 1px solid #e3e4e5;
    }
  }
  .infoInput {
    margin-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e3e4e5;
    align-items: center;
    .el-form-item {
      margin: 0;
    }
    span {
      color: gray;
      cursor: pointer;
    }
  }
  .phoneLoginBtn {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    .el-button {
      width: 300px;
    }
  }
}
</style>