<template>
  <div class="mainContent ">
    <el-card>
      <div class="mainHeader">
        <el-menu :default-active="activeIndex"
                 mode="horizontal"
                 router
                 @select="handleSelect">
          <el-menu-item v-for="item in titleForm"
                        :key='item.id'
                        :index="item.id"
                        :route='item.path'
                        :class="{'isSelect':activeIndex===item.id}">
            {{item.title}}
          </el-menu-item>
        </el-menu>
      </div>
      <follow v-if="hasSelect == '1'"></follow>
      <home v-if="hasSelect == '2'"></home>
      <hot v-if="hasSelect == '3'"></hot>
      <zvideo v-if="hasSelect == '4'"></zvideo>
    </el-card>
  </div>
</template>

<script>
import Follow from './components/Follow.vue'
import Home from './components/Home.vue'
import Hot from './components/Hot.vue'
import Zvideo from './components/Zvideo.vue'
export default {
  data() {
    return {
      activeIndex: '1',
      hasSelect: '1',
      titleForm: [
        {
          id: '1',
          title: '关注',
          path: '/follow',
        },
        {
          id: '2',
          title: '推荐',
          path: '/home',
        },
        {
          id: '3',
          title: '热榜',
          path: '/hot',
        },
        {
          id: '4',
          title: '视频',
          path: '/zvideo',
        },
      ],
    }
  },
  components: {
    Follow,
    Home,
    Hot,
    Zvideo,
  },
  methods: {
    handleSelect(index) {
      this.hasSelect = index + ''
      console.log(index)
      console.log(this.hasSelect)
    },
  },
}
</script>

<style lang="less" scoped>
.mainContent {
  background-color: #fff;
  margin-top: 15px;
  .mainHeader {
    box-sizing: border-box;
    height: 59px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e3e4e5;
    // padding: 10px;
    .el-link {
      margin: 0 15px;
    }
  }
}
.isSelect {
  color: #0066ff;
}
</style>