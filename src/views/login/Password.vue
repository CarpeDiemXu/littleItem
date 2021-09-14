<template>
  <div class="password-container">
    <div class="container">
      <el-form :model="passwordForm"
               :rules="passwordRules"
               ref="passwordRef">
        <el-form-item prop="phoneOrEmail">
          <el-input v-model="passwordForm.phoneOrEmail"
                    placeholder="手机号或邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type='password'
                    v-model="passwordForm.password"
                    placeholder="密码"></el-input>
        </el-form-item>
        <div class="passwordLoginBtn">
          <el-row>
            <el-button type="primary"
                       @click="login">登录</el-button>
          </el-row>
        </div>
      </el-form>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      passwordForm: {
        phoneOrEmail: '',
        password: '',
      },
      passwordRules: {
        phoneOrEmail: [
          { required: true, message: '请输入手机号或邮箱', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    ...mapActions(['loginFun']),
    login() {
      this.$refs.passwordRef.validate((valid) => {
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
.password-container/deep/.el-input__inner {
  border: 0;
}
.el-form-item {
  border-bottom: 1px solid #e3e4e5;
}
.passwordLoginBtn {
  display: flex;
  padding-top: 40px;
  justify-content: center;
  .el-button {
    width: 300px;
  }
}
</style>