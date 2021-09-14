<template>
  <div>
    <!-- 头部 -->
    <div class="mainHeaderNav">

      <header-title :activeIndex='activeIndex'></header-title>
    </div>
    <!-- 主体 -->
    <div class="model">
      <div class="nullPosition"></div>
      <div class="mainContent">
        <!-- 左边 -->
        <div>
          <waiting-main></waiting-main>
        </div>
        <!-- 右边 -->
        <main-right></main-right>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from './home/Header.vue'
import WaitingMain from './waiting/WaitingMain.vue'
import MainRight from './home/main/MainRight.vue'
export default {
  data() {
    return {
      activeIndex: '4',
    }
  },
  components: {
    HeaderTitle,
    WaitingMain,
    MainRight,
  },
}
</script>

<style lang="less" scoped>
.nullPosition {
  width: 100%;
  height: 52px;
}
.mainHeaderNav {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
}
.mainContent {
  float: left;
}
</style>