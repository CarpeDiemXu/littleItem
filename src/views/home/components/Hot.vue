<template>
  <div>
    <div class="hotListNav">
      <ul>
        <li v-for="item in hotListForm"
            :key="item.id">
          <button :class="{'isSlect':isSlecta === item.btnName}"
                  @click="handleClick(item.btnName,item.listName)">{{item.btnName}}</button>
        </li>
      </ul>
    </div>
    <div v-for="item in hotItemForm"
         :key="item.id">
      <hot-item :hotItemForm='item'></hot-item>
    </div>
  </div>
</template>

<script>
import HotItem from './hot/HotItem.vue'
export default {
  data() {
    return {
      isSlecta: '全部',
      hotListForm: [
        {
          id: '1',
          btnName: '全部',
        },
        {
          id: '2',
          btnName: '科学',
          listName: 'science',
        },
        {
          id: '3',
          btnName: '数码',
          listName: 'digital',
        },
        {
          id: '4',
          btnName: '体育',
          listName: 'sport',
        },
        {
          id: '5',
          btnName: '时尚',
          listName: 'fashion',
        },
        {
          id: '6',
          btnName: '影视',
          listName: 'film',
        },
      ],
      hotItemForm: [
        {
          id: '1',
          title:
            '特斯拉宣布滇藏线超级充电站正式贯通，沿途设 14 座超级充电站， 1 座目的地充电站，有哪些意义？',
          content:
            '7 日，特斯拉宣布滇藏线正式贯通，以四季如春的云南昆明为起点，途经大理、丽江、香格里拉、梅里后入藏。沿途设有 14 座超级充电站， 1 座目的地充电站。',
          img: 'https://pic2.zhimg.com/80/v2-6043caf50ce0db9a4b6d8166390cb80b_400x224.jpeg',
        },
        {
          id: '2',
          title: '如何看待魅族公告终止「三零系统」，这将对行业有什么影响？',
          img: '	https://pica.zhimg.com/80/v2-655aced97e0f1a1ccc77cd7c22933d68_400x224.jpeg',
        },
        {
          id: '3',
          title: '怎么看待德国要求苹果等手机能用 7 年？这一要求能实现吗？',
          content:
            '9 月 5 日消息，德国政府周六向欧盟提交最新提案，要求包括苹果在内的智能手机制造商将为 iPhone 和其他设备提供安全补丁更新和零件的时间延长至七年，以期使这些类别的产品对保护环境更有利。 德国政府已与欧盟委员会展开谈判，以修改影响智能手机和平板电脑维修和服务的提案。虽然欧盟委员会正在努力推动设备供应商提供五年的零部件和更新支持，但德国希望这个时间能够更长。 欧盟计划推动设备供应商为智能手机和平板电脑提供五年的系统更新支持，但智能手机的零部件供应期限可以是五年，而平板电脑零部件供应期限则延长至六年。不过当地媒体报道称，德国联邦经济部希望将期限都延长到七年。 除了要求延长更新支持和零件供应周期外，德国还希望制造商以 「 合理的价格 」 提供零件。这包括要求供应商公布零件的价格，并且不能随着时间的推移而增加成本。 就这些部件到达目的地应该需要多长时间而言，欧盟委员会希望最多 5 个工作日，但德国希望能更快交付。德国还支持欧盟委员会引入能源标签和可维修性指数的计划，以向消费者展示维修设备是否值得。 虽然德国希望欧盟委员会采取更加严厉的举措，但供应商们的希望却恰好与之相反。成员包括苹果、谷歌和三星等公司的行业组织 DigitalEurope，正在游说只提供三年的安全更新和两年的功能更新。 DigitalEurope 认为，设备供应商只应该提供电池和屏幕等部件，因为摄像头和麦克风等其他部件很少会出现故障。 关于 iPhone 和类似硬件能够使用多长时间，各方之间的争论将会继续持续很久，欧盟预计将在 2023 年公布提案。 2020 年 11 月，欧洲议会投票支持维修权的概念，并呼吁欧洲委员会研究强制性标签和相关设备寿命问题。2021 年 4 月，西班牙多个部门批准了一项国家消费者保护标准，该标准要求公司销售的产品必须有三年的保修期，并将零件的可用性从五年增加到十年。一部手机必须能用 7 年？苹果、三星、 Google：三年差不多 _ 详细解读 _ 最新资讯 _ 热点事件 _36 氪',
          img: '	https://pic2.zhimg.com/80/v2-18b89cb9d06780c17503d6dd61736929_400x224.jpeg',
        },
        {
          id: '4',
          title:
            'realme 真我 GT Neo2 正式官宣，将于 9 月 22 日发布，你对此有哪些期待？',
          content:
            'GT Neo 是 realme 2021 年上半年的主打产品之一，市场反应良好，成为行业爆款，那么作为这台机子的更新产品，realme GT Neo2 会在哪些方面迭代升级？是否值得期待和购买？',
          img: '	https://pic2.zhimg.com/80/v2-e343e3945452f30938896c445d30efc3_400x224.jpeg',
        },
        {
          id: '5',
          title: '新手买机械键盘什么轴的好用？',
          img: '		https://pic2.zhimg.com/50/v2-5bee6d7016e43e2ee10bdc68a4527ebb_400x224.jpg',
        },
      ],
    }
  },
  methods: {
    handleClick(btnName, listName) {
      this.isSlecta = btnName
      this.$router.push({
        // 第一种
        path: '/hot',
        query: {
          list: listName,
        },
        // 第二种
        // path: '/hot/$(listName)',
        // 第三种
        // name: 'hot',
        // params: {
        //   list: listName,
        // },
      })
    },
  },
  components: {
    HotItem,
  },
}
</script>

<style lang="less" scoped>
.hotListNav {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 63px;
  border-bottom: 1px solid #e3e4e5;
  ul {
    display: flex;
    button {
      width: 68px;
      height: 30px;
      color: #646464;
      border: none;
      margin-right: 5px;
    }
  }
}
.isSlect {
  color: #06f;
  background-color: #0066ff1a;
}
</style>