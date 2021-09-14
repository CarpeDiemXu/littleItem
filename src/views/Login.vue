<template>
  <div class="container">
    <div class="login-container">

      <div class="login-header">
        <div class="login-header-title"
             @click="changeShowState('phone')"
             :class="{'isActive':isShow === 'phone'}">手机登录</div>
        <div class="login-header-title"
             @click="changeShowState('password')"
             :class="{'isActive':isShow === 'password'}">密码登录</div>
      </div>
      <phone v-show="isShow === 'phone'"></phone>
      <password v-show="isShow === 'password'"></password>

    </div>
  </div>
</template>

<script>
import Phone from './login/Phone.vue'
import Password from './login/Password.vue'

export default {
  components: { Phone, Password },
  data() {
    return {
      isShow: 'phone',
    }
  },
  methods: {
    changeShowState(value) {
      console.log(value)
      if (value === 'phone') {
        this.isShow = 'phone'
      } else {
        this.isShow = 'password'
      }
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background: url('https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png');
  .login-container {
    box-sizing: border-box;
    width: 350px;
    height: 450px;
    background-color: #fff;
    padding: 10px;
    .login-header {
      display: flex;
      margin-bottom: 20px;
      .login-header-title {
        font-size: 18px;
        margin-right: 20px;
        cursor: pointer;
        padding-bottom: 20px;
      }
    }
  }
}
.isActive {
  font-weight: bold;
  border-bottom: 2px solid #000;
}
</style>