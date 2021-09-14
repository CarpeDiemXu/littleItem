<template>
  <div class="itemContent">
    <!-- 头部 -->
    <div>
      <el-link :underline="false">{{itemForm.itemTitle}}</el-link>
    </div>

    <!-- 中间内容 -->
    <div>
      <read-ctx-min :itemForm='itemForm'
                    v-if="isReadCtx"
                    @handleDownClick='handleDownClick'></read-ctx-min>
      <read-ctx v-if="!isReadCtx"
                :itemForm='itemForm'
                @handleUpClick='handleUpClick'></read-ctx>
    </div>
    <!-- 底部 -->
    <div class="mainFooter">
      <el-row>
        <el-button type="primary"
                   icon="el-icon-caret-top"
                   :class="{select:isSelectUp}"
                   @click="handleBtnClickUp">赞同</el-button>
        <el-button type="primary"
                   icon="el-icon-caret-bottom"
                   :class="{select:isSelectDown}"
                   @click="handleBtnClickDown"></el-button>
        <span><i class="el-icon-chat-line-round"></i>添加评论</span>

        <el-dropdown>
          <span class="el-dropdown-link"><i class="el-icon-s-promotion"></i>分享
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-paperclip"></i>复制链接</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-coordinate"></i>新浪微博</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <span @click="handleCollectClick"><i class="el-icon-star-on"></i>{{collect}}</span>
        <span @click="handleLikeClick"><i class="el-icon-message-solid"></i>{{like}}</span>

        <el-dropdown>
          <span class="el-dropdown-link"><i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>举报</el-dropdown-item>
            <el-dropdown-item>禁止转载</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-row>
    </div>
  </div>
</template>

<script>
import ReadCtx from '../views/home/main/ReadCtx.vue'
import ReadCtxMin from '../views/home/main/ReadCtxMin.vue'
export default {
  data() {
    return {
      isReadCtx: true,
      like: '喜欢',
      collect: '收藏',
      isSelectUp: false,
      isSelectDown: false,
    }
  },
  props: {
    itemForm: Object,
  },
  methods: {
    handleDownClick() {
      this.isReadCtx = false
    },
    handleUpClick() {
      this.isReadCtx = true
    },
    handleLikeClick() {
      if (this.like === '喜欢') {
        this.like = '取消喜欢'
      } else {
        this.like = '喜欢'
      }
    },
    handleCollectClick() {
      if (this.collect === '收藏') {
        this.collect = '已收藏'
      } else {
        this.collect = '收藏'
      }
    },
    handleBtnClickUp() {
      this.isSelectUp = this.isSelectUp ? false : true
    },
    handleBtnClickDown() {
      this.isSelectDown = this.isSelectDown ? false : true
    },
  },
  components: {
    ReadCtx,
    ReadCtxMin,
  },
}
</script>

<style lang="less" scoped>
.itemContent {
  margin-top: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  p {
    color: #8590a6;
  }
  a {
    font-size: 18px;
    color: #121212;
    font-weight: bold;
  }
  .mainFooter {
    margin-bottom: 20px;
    .el-button {
      color: #0066ff;
      border: none;
      background-color: #ecf5ff;
    }
    .select {
      color: #fff;
      background-color: #06f;
    }
    span {
      font-size: 14px;
      color: #8590a6;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>