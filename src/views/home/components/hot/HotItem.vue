<template>
  <div class="hotItemContainer">
    <!-- 左 -->
    <div class="left">{{hotItemForm.id}}</div>
    <!-- 中 -->
    <div class="center">
      <div class="centerTextTitle">

        <p>{{hotItemForm.title}}</p>
      </div>
      <div class="centerTextSpan">
        <span v-if="hotItemForm.content">{{hotItemForm.content}}</span>
      </div>
      <div class="centerIconSpan">
        <span><i class="el-icon-s-flag"></i>854 万领域热度 </span>
        <span> <i class="el-icon-s-promotion"></i>分享</span>
      </div>
    </div>
    <!-- 右 -->
    <div class="right">
      <img :src="hotItemForm.img">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotItemForm: Object,
  },
}
</script>

<style lang="less" scoped>
.hotItemContainer {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #e3e4e5;
  .left {
    width: 57px;
    height: 105px;
    font-size: 18px;
  }
  .center {
    width: 415px;
    height: 105px;
    line-height: 28px;
    p {
      font-size: 18px;
      font-weight: bold;
    }
    .centerTextSpan {
      height: 25px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .centerIconSpan {
      margin-top: 5px;
      color: rgb(200, 183, 183);
      span {
        margin-right: 20px;
      }
    }
  }
  .right {
    width: 190px;
    height: 105px;
    margin-left: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

