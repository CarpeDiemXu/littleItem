<template>
  <div>
    <div v-for="item in itemForm"
         :key="item.id">
      <list-item :itemForm="item"></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  data() {
    return {
      itemForm: [
        {
          id: '1',
          itemTitle: '30 岁体检发现结节，医生说是教科书式的恶性肿瘤',
          textImg:
            'https://pica.zhimg.com/v2-7c5209b6a5dafe7a55fc00bb4ff233ac_400x224.jpg?source=3af55fa1',
          textContent:
            ' 作者：苏格 | 策划：洋葱 监制：Feidi | 封面图来源：图虫创意 我叫石头，3 年前的 8 月 8 日，30 岁的我照例和同事参加了单位的常规体检。 前一年检查出脊椎增生，我和…',
        },
        {
          id: '2',
          itemTitle: '何采用教师现场授课这种效率低成本高的方式来传递知识？',
          textContent:
            ' 我们教师曾经讨论过如何让其他行业的人知道教学的艰辛，讨论的结果是，让其他人尝试教家里70岁老人（文盲更好）使用微信即可。 不仅要现场授课，还要一遍遍的…',
        },
        {
          id: '3',
          itemTitle: '直播运营好干吗，试岗几天想放弃了？',
          textImg:
            'https://pic1.zhimg.com/50/v2-9bd324890137ade60294dfd6ce094538_400x224.jpg',
          textContent:
            ' 如果你是有着3-5年的经验的“老”运营，并且能力特别综合，各项基本功特别扎实，那么直播运营就很适合你。 但如果你是刚做运营不久，还没有什么工作经验，那说实话，直播运营不好干。 为什么这么说呢？ 先来看看，一…',
        },
        {
          id: '4',
          itemTitle: '旅游书中鲜少提及，这座面积不足重庆1/3的欧洲小国很有料',
          textContent:
            '你好！仓储管理，非常细化，涉及到方方面面。想要提高仓储管理的效率，需要系统化地去解决。接下来，简单分享几点：你好！ 仓储管理，非常细化，涉及到方方面面。想要提高仓储管理的效率，需要系统化地去解决。接下来，简单分享几点： 01 组织结构 现阶段的大部分仓库，自动',
        },
        {
          id: '5',
          itemTitle: '面试被问到你的优点和缺点时',
          textContent:
            ' 面试时，面试官经常会问一个问题：“请简单说一下你的优点和缺点。”对于这个问题，百度上随便一搜就能找到很多固定的答案，而有的应届毕业生或职…',
        },
      ],
    }
  },
  components: {
    ListItem,
  },
}
</script>

<style lang="less" scoped>
</style>