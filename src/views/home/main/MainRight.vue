<template>
  <div class="right">
    <!-- 第一个 -->
    <div class="first">
      <!-- 标题 -->
      <div class="first-title">
        <i class="el-icon-user-solid"></i>
        <span class="s1">创作中心</span>
        <span class="s2">Lv 1</span>
        <a href="#">草稿箱（0）</a>
      </div>
      <!-- 图标 -->
      <div class="first-icon">
        <div>
          <div class="first-icon-item">
            <i class="el-icon-user-solid"></i>
          </div>
          <span>回答问题</span>
        </div>
        <div>
          <div class="first-icon-item">
            <i class="el-icon-user-solid"></i>
          </div>
          <span>发视频</span>
        </div>
        <div>
          <div class="first-icon-item">
            <i class="el-icon-user-solid"></i>
          </div>
          <span>写文章</span>
        </div>
        <div>
          <div class="first-icon-item">
            <i class="el-icon-user-solid"></i>
          </div>
          <span>写想法</span>
        </div>
      </div>
      <!-- 主体 -->
      <div class="first-main">
        <div>
          <p class="first-main-text">《创作者》独家分享第二课：内容创作有哪些好上手的基本方法？</p>
          <span>323,902 次播放量</span>
        </div>
        <div class="first-main-img"></div>
      </div>
      <!-- 按钮 -->
      <el-row>
        <el-button>
          进入创作中心
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </el-row>
    </div>
    <!-- 第二个 -->
    <div class="second">
      <div class="img-container">

        <img src="https://pica.zhimg.com/v2-7b43d62abaa16d8f5c101b430fe1b12e.jpg?source=6a64a727">
      </div>
      <!-- 图标 -->
      <div class="second-icon">

        <div class="second-icon-item">
          <div>
            <i class="el-icon-s-help"></i>
          </div>
          <p>Live</p>
        </div>
        <div class="second-icon-item">
          <div>
            <i class="el-icon-s-help"></i>
          </div>
          <p>Live</p>
        </div>
        <div class="second-icon-item">
          <div>
            <i class="el-icon-s-help"></i>
          </div>
          <p>Live</p>
        </div>
        <div class="second-icon-item">
          <div>
            <i class="el-icon-s-help"></i>
          </div>
          <p>Live</p>
        </div>
        <div class="second-icon-item">
          <div>
            <i class="el-icon-s-help"></i>
          </div>
          <p>Live</p>
        </div>
        <div class="second-icon-item">
          <div>
            <i class="el-icon-s-help"></i>
          </div>
          <p>Live</p>
        </div>

      </div>
    </div>
    <!-- 第三个 -->
    <div class="third">
      <div class="third-item"
           v-for="item in thirdFrom"
           :key="item.id">
        <i :class="item.i"></i>
        <span>{{item.s}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thirdFrom: [
        {
          id: 1,
          i: 'el-icon-s-help',
          s: '我的收藏',
        },
        {
          id: 2,
          i: 'el-icon-s-help',
          s: '我的收藏',
        },
        {
          id: 3,
          i: 'el-icon-s-help',
          s: '我的收藏',
        },
        {
          id: 4,
          i: 'el-icon-s-help',
          s: '我的收藏',
        },
        {
          id: 5,
          i: 'el-icon-s-help',
          s: '我的收藏',
        },
        {
          id: 6,
          i: 'el-icon-s-help',
          s: '我的收藏',
        },
        {
          id: 7,
          i: 'el-icon-s-help',
          s: '我的收藏',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  .first {
    box-sizing: border-box;
    width: 296px;
    height: 316px;
    background-color: #fff;
    margin-left: 5px;
    padding: 10px;
    .first-title {
      position: relative;
      .el-icon-user-solid {
        margin-right: 10px;
      }
      .s1 {
        font-size: 14px;
        margin-right: 10px;
      }
      .s2 {
        color: #06f;
      }
      a {
        position: absolute;
        top: 50%;
        right: 0;
        text-decoration: none;
        font-size: 12px;
        color: #444;
        transform: translate(0, -50%);
      }
    }
    .first-icon {
      display: flex;
      justify-content: space-between;
      margin: 30px 10px 0 10px;
      .first-icon-item {
        .el-icon-user-solid {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: rgb(171, 204, 253);
          border-radius: 40px;
        }
      }
      span {
        font-size: 12px;
      }
    }
    .first-main {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 96px;
      background-color: #8590a60d;
      margin: 20px 0;
      padding: 10px;
      position: relative;
      .first-main-text {
        width: 159px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      span {
        font-size: 12px;
        color: #999;
      }
      .first-main-img {
        width: 78px;
        height: 78px;
        background-color: brown;
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    .el-row {
      display: flex;
      justify-content: center;
      align-items: center;
      .el-button {
        width: 262px;
        color: #06f;
        border: 1px solid #06f;
      }
    }
  }
  .second {
    width: 296px;
    height: 275px;
    margin-top: 10px;
    margin-left: 5px;
    background-color: #fff;
    .img-container {
      width: 100%;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .second-icon {
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
      justify-content: space-around;
      .second-icon-item {
        box-sizing: border-box;
        padding-top: 20px;
        width: 80px;
        height: 80px;
        .el-icon-s-help,
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #40f;
        }
      }
    }
  }
  .third {
    width: 296px;
    height: 296px;
    background-color: #fff;
    margin-top: 10px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .third-item {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      color: #8590a6;
      .el-icon-s-help {
        margin-right: 15px;
      }
    }
  }
}
</style>