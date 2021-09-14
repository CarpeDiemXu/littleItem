<template>
  <div class="home-container">
    <header>
      <div class="model navHeader">
        <h1>知乎</h1>
        <!-- 导航栏 -->
        <div>
          <el-menu :default-active='activeIndex'
                   mode="horizontal"
                   router>
            <el-menu-item v-for="item in navTitle"
                          :key='item.id'
                          :index='item.id'
                          :route='item.path'
                          :class="{'isSelect':activeIndex===item.id}">{{item.title}}</el-menu-item>
          </el-menu>
        </div>
        <!-- 搜索栏 -->
        <div class="searchBox">
          <!-- 输入框 -->
          <div>
            <!-- <input type="text"
                   placeholder="输入搜索内容"> -->
            <el-input placeholder="请输入内容"
                      suffix-icon="el-icon-search"></el-input>
          </div>
          <!-- 搜索按钮 -->
          <div class="phoneLoginBtn">
            <el-row>
              <el-button type="primary">登录</el-button>
            </el-row>
          </div>
        </div>
        <!-- 图标 -->
        <div class="headerIcon">
          <i class="el-icon-message-solid"></i>
          <i class="el-icon-chat-round"></i>

          <el-dropdown @command='exitLogin'>

            <i class="el-icon-s-custom"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    activeIndex: String,
  },
  data() {
    return {
      navTitle: [
        {
          id: '1',
          title: '首页',
          path: '/home',
        },
        {
          id: '2',
          title: '会员',
          path: '/vip',
        },
        {
          id: '3',
          title: '发现',
          path: '/explore',
        },
        {
          id: '4',
          title: '等你来答',
          path: '/question/waiting',
        },
      ],

      searchContent: '',
    }
  },
  methods: {
    ...mapActions(['exitFun']),
    exitLogin() {
      this.exitFun().then((obj) => {
        if (obj.suc) {
          this.$message.success('退出成功')
          this.$router.push('/login')
        } else {
          this.$message.error('退出失败')
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.home-container/deep/.el-input__inner,
.el-textarea__inner {
  height: 34px;
  line-height: 34px;
  border-radius: 34px;
  background: transparent;
}
.home-container/deep/.el-input__icon {
  height: 34px;
  line-height: 34px;
}
.home-container {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52px;
    background-color: #fff;
    border: 1px solid rgba(59, 6, 6, 0.1);
    padding: 0 50px;
    .navHeader {
      display: flex;
      align-items: center;
      h1 {
        color: #0066ff;
        margin-right: 30px;
      }
      .el-menu {
        display: flex;
        align-items: center;
        .el-menu-item {
          height: 0;
          font-size: 16px;
          line-height: 0;
          padding: 23.5px 0;
          margin-right: 25px;
          color: #8590a6;
          border-bottom: 5px solid #0066ff;
        }
      }
      .searchBox {
        display: flex;
        align-items: center;
        .el-input {
          width: 370px;
        }
        .el-button {
          height: 34px;
          margin-left: 15px;
          border-radius: 34px;
        }
      }
      .headerIcon {
        margin-left: 50px;
        i {
          font-size: 25px;
          margin-left: 30px;
          color: gray;
        }
      }
    }
  }
}
.isSelect {
  color: #000;
  font-weight: bold;
}
</style>