<template>
  <div class="readContainer">
    <div class="readUserName">
      {{itemForm.user}}
    </div>
    <div class="readImgContainer"
         v-if="itemForm.textImg">
      <img :src="itemForm.textImg">
    </div>
    <p>{{itemForm.textContent}}</p>
    <div class="readBottomIcon"
         @click="handleClick">
      收起
      <i class="el-icon-arrow-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemForm: Object,
  },
  methods: {
    handleClick() {
      console.log('1')
      this.$emit('handleUpClick')
    },
  },
}
</script>

<style lang="less" scoped>
.readContainer {
  width: 100%;
  .readUserName {
    height: 30px;
    line-height: 30px;
    font-weight: bold;
  }
  .readImgContainer {
    width: 100%;
    height: 368px;
    margin: 10px 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .readBottomIcon {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    color: gray;
  }
}
</style>