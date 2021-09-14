<template>
  <div class="mainContent ">
    <el-card>
      <div class="mainHeader">
        <el-row>
          <el-button round
                     v-for="item in bntForm"
                     :key='item.id'
                     @click="handleWaitingClick(item.type)">
            <i :class="item.i"></i>
            {{item.btnName}}
          </el-button>
        </el-row>
      </div>
      <div>
        <div class="nullPositions"></div>
        <waiting-item></waiting-item>
      </div>
    </el-card>
  </div>
</template>

<script>
import WaitingItem from './WaitingItem.vue'
export default {
  data() {
    return {
      bntForm: [
        {
          id: '1',
          i: 'el-icon-arrow-down',
          btnName: '为你推荐',
        },
        {
          id: '2',
          i: 'el-icon-arrow-down',
          btnName: '人气问题',
          type: 'hot',
        },
        {
          id: '3',
          i: 'el-icon-arrow-down',
          btnName: '最新问题',
          type: 'new',
        },
        {
          id: '4',
          i: 'el-icon-arrow-down',
          btnName: '邀请回答',
          type: 'invite',
        },
      ],
    }
  },
  methods: {
    handleWaitingClick(type) {
      this.$router.push({
        path: '/question/waiting',
        query: {
          type: type,
        },
      })
    },
  },
  components: {
    WaitingItem,
  },
}
</script>

<style lang="less" scoped>
.mainContent {
  background-color: #fff;
  margin-top: 15px;
  .mainHeader {
    z-index: 99;
    position: fixed;
    width: 652px;
    height: 59px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e3e4e5;
    background-color: #fff;
    // padding: 10px;
    .el-link {
      margin: 0 15px;
    }
    .el-button {
      margin-right: 10px;
    }
  }
  .nullPositions {
    width: 100%;
    height: 59px;
  }
}
</style>