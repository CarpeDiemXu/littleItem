<template>
  <div>
    <div class="text-container">
      <!-- 左边（可无） -->
      <div class="text-img"
           v-if="itemForm.textImg">
        <img :src="itemForm.textImg">
      </div>
      <!-- 右边 -->
      <div>
        <div class="text">{{itemForm.textContent}}</div>
        <div class="more"
             @click="handleClick">
          <el-link :underline="false">阅读全文<i class="el-icon-arrow-down"></i></el-link>
        </div>
      </div>
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
      // console.log('1')
      this.$emit('handleDownClick')
    },
  },
}
</script>

<style lang="less" scoped>
.text-container {
  display: flex;
  cursor: pointer;
  align-items: center;
  .text-img {
    width: 190px;
    height: 105px;
    padding: 0;
    margin: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
    display: block;
  }
  .text {
    padding-top: 5px;
    overflow: hidden; //用在块级元素（例如div）的外层隐藏溢出的内部元素
    text-overflow: ellipsis; //这一属性依赖于overflow: hidden存在，只有设置了overflow:hidden它才是能够生效的，你可以把它看作overflow对于文本溢出隐藏的一种特殊表现样式。
    display: -webkit-box; //和 -webkit-line-clamp: 2；结合使用，将对象作为弹性伸缩盒子模型显示
    -webkit-line-clamp: 2; //用来限制在一个块元素显示的文本的行数，例如 -webkit-line-clamp: 2 表示最多显示 2 行。
    -webkit-box-orient: vertical; //和 -webkit-line-clamp: 2；结合使用 ，设置或检索伸缩盒对象的子元素的排列方式
  }
  .more {
    display: flex;
    justify-content: flex-end;

    .el-link {
      font-size: 14px;
      color: #175199;
      font-weight: 300;
    }
  }
}
</style>