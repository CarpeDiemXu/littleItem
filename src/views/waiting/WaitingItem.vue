<template>
  <div class="itemContent">
    <!-- 头部 -->
    <div v-for="item in infoForm"
         :key="item.id">
      <div>
        <p>{{item.littleTitle}} </p>
        <el-link :underline="false">{{item.title}}</el-link>
      </div>
      <!-- 底部 -->
      <div class="mainFooter">
        <el-row>
          <el-button type="primary">
            <i class="el-icon-edit"></i>
            写回答
          </el-button>
          <span>{{item.ans}} 回答</span>
          <span>{{item.att}} 关注</span>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoForm: [
        {
          id: '1',
          littleTitle: '试试帮他解答',
          title: '中专学历是低学历，在当下社会毫无价值吗？',
          ans: '13',
          att: '14',
        },
        {
          id: '2',
          littleTitle: '试试帮他解答',
          title: '中专学历是低学历，在当下社会毫无价值吗？',
          ans: '13',
          att: '14',
        },
        {
          id: '3',
          littleTitle: '试试帮他解答',
          title: '中专学历是低学历，在当下社会毫无价值吗？',
          ans: '13',
          att: '14',
        },
        {
          id: '4',
          littleTitle: '试试帮他解答',
          title: '中专学历是低学历，在当下社会毫无价值吗？',
          ans: '13',
          att: '14',
        },
        {
          id: '5',
          littleTitle: '试试帮他解答',
          title: '中专学历是低学历，在当下社会毫无价值吗？',
          ans: '13',
          att: '14',
        },
        {
          id: '6',
          littleTitle: '试试帮他解答',
          title: '中专学历是低学历，在当下社会毫无价值吗？',
          ans: '13',
          att: '14',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.itemContent {
  margin-top: 15px;
  a {
    font-size: 18px;
    color: #121212;
    font-weight: bold;
  }
  .mainFooter {
    margin: 20px 0;
    border-bottom: 1px solid #e3e4e5;
    padding-bottom: 10px;
    .el-button {
      color: #fff;
      border: 1px solid #0066ff;
    }
    span {
      font-size: 20px;
      color: #8590a6;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>