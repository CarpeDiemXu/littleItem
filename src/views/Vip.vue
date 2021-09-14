<template>
  <div>
    <div class="mainHeaderNav">
      <header-title :activeIndex='activeIndex'></header-title>
    </div>
    <div>
      <div class="nullPosition"></div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from './home/Header.vue'
export default {
  data() {
    return {
      activeIndex: '2',
    }
  },
  components: {
    HeaderTitle,
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
</style>