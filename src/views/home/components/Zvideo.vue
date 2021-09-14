<template>
  <div class="zvideoContainer">
    <div v-for="item in zvideoFrom"
         :key="item.id">
      <zvideo-item :zvideoFrom='item'></zvideo-item>
    </div>
  </div>
</template>

<script>
import ZvideoItem from './zvideo/ZvideoItem.vue'
export default {
  data() {
    return {
      zvideoFrom: [
        {
          id: '1',
          img: 'https://pic2.zhimg.com/v2-205cf190b2d45610f3c2b6812d63d92c_640w.jpg?source=12a79843',
          title: '钢琴弹奏《七里香》',
          userName: 'NAYA的钢琴时光',
        },
        {
          id: '2',
          img: 'https://pic3.zhimg.com/v2-48e81e8a0dbba86868692b8854072e97_640w.jpg?source=12a79843',
          title: '魔都女律师真实的一天（2021)',
          userName: '小水',
        },
        {
          id: '3',
          img: 'https://pic1.zhimg.com/v2-aa74368f301db0367b33144a9d309e52_640w.jpg?source=12a79843',
          title: '体重过百，很羞耻吗？为什么女生都觉得自己胖',
          userName: '塑料',
        },
        {
          id: '4',
          img: '	https://pic1.zhimg.com/v2-f0f697ada693919ddcbcaec80bd8a883_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '5',
          img: '	https://pic3.zhimg.com/v2-455ae985ef4581beaf19feb836907eef_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '6',
          img: 'https://pic2.zhimg.com/v2-823fac828ed3c3ebc21a13710f8b93cd_640w.jpg?source=382ee89a',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '7',
          img: 'https://pic3.zhimg.com/v2-47d1ba66b23bfd1d4d30f237d3d196ae_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '8',
          img: '	https://pic1.zhimg.com/v2-f0f697ada693919ddcbcaec80bd8a883_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '9',
          img: '	https://pic1.zhimg.com/v2-f0f697ada693919ddcbcaec80bd8a883_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '10',
          img: '	https://pic1.zhimg.com/v2-f0f697ada693919ddcbcaec80bd8a883_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '11',
          img: '	https://pic1.zhimg.com/v2-f0f697ada693919ddcbcaec80bd8a883_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
        {
          id: '12',
          img: '	https://pic1.zhimg.com/v2-f0f697ada693919ddcbcaec80bd8a883_640w.jpg?source=12a79843',
          title: '10种学习心态正在毁掉你！你中枪几条？ | 看完立刻改正',
          userName: '杨真真',
        },
      ],
    }
  },
  components: {
    ZvideoItem,
  },
}
</script>

<style lang="less" scoped>
.zvideoContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 16px 0px;
  box-sizing: border-box;
}
</style>