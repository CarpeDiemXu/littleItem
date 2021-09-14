<template>
  <div class="itemContainer">
    <!-- 上 -->
    <div class="itemTop">
      <img :src="	zvideoFrom.img">
    </div>
    <!-- 中 -->
    <div class="itemCenter">
      <p>{{zvideoFrom.title}}</p>
    </div>
    <!-- 下 -->
    <div class="itemBottom">
      <span>{{zvideoFrom.userName}}</span>

      <el-dropdown :hide-on-click='false'
                   trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-more"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <div>
            <item-more :zvideoFrom='zvideoFrom'></item-more>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// import ItemMore from './ItemMore.vue'
import ItemMore from './itemMore.vue'
export default {
  data() {
    return {
      itemMoreNeedUser: '',
    }
  },
  props: {
    zvideoFrom: Object,
  },
  components: {
    ItemMore,
  },
}
</script>

<style lang="less" scoped>
.itemContainer {
  width: 207px;
  height: 205px;
  .itemTop {
    width: 100%;
    height: 128px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .itemCenter {
    font-size: 14px;
    margin: 5px 0 10px 0;
  }
  .itemBottom {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
}
</style>