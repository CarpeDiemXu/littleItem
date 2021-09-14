<template>
  <div class="itemContainer">
    <!-- 上 -->
    <div class="itemTop">
      <div>
        不感兴趣：
      </div>
      <p>
        <i class="el-icon-warning-outline"></i>
        减少相似内容推荐
      </p>
      <p><i class="el-icon-user"></i>不看该作者：{{zvideoFrom.userName}}</p>
    </div>
    <!-- 下 -->
    <div class="itemBottom">
      <div>内容反馈：</div>
      <p>
        <i class="el-icon-document-copy"></i>
        内容重复
      </p>
      <p>
        <i class="el-icon-close"></i>
        内容质量差
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    zvideoFrom: Object,
  },
}
</script>

<style lang="less" scoped>
.itemContainer {
  box-sizing: border-box;
  font-size: 14px;
  p {
    color: #8590a6;
  }

  .itemTop,
  .itemBottom {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  .itemTop {
    border-bottom: 1px solid #e3e4e5;
  }
}
</style>