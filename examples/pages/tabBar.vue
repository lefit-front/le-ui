<style>
.demo-tab-bar .leuv-tab-bar-name {
  font-size: 15px;
}
</style>
<template>
  <div class="demo-tab">
    <h1>tabBar</h1>
    <leuv-tab-bar class="demo-tab-bar" style="margin-bottom:10px" :dataList="data02" select="card" line></leuv-tab-bar>
    <leuv-tab-bar style="background-color:#f1f1f1; font-size:29px!important" :dataList="data" select="card" line></leuv-tab-bar>
    <leuv-tab-bar class="demo-tab-bar" type="block" :dataList="data03"></leuv-tab-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          'id': 'card',
          'name': '会员卡',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png',
          'to': ''
        },
        {
          'id': 'pt',
          'name': '私教课',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png',
          'to': ''
        },
        {
          'id': 'camp',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png',
          'name': '训练营',
          'to': ''
        },
        {
          'id': 'mall',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png',
          'name': '运动装备',
          'to': '/baseList'
        }
      ],
      data03: [
        {
          'id': 'card',
          'name': '会员卡',
          'slot': '1',
          'to': ''
        },
        {
          'id': 'pt',
          'slot': '2',
          'name': '私教课',
          'to': ''
        },
        {
          'id': 'camp',
          'slot': '3',
          'name': '训练营',
          'to': ''
        },
        {
          'id': 'mall',
          'slot': '4',
          'name': '运动装备',
          'to': '/baseList'
        }
      ],
      data02: [
        {
          'id': 'card',
          'name': '会员卡',
          'to': ''
        },
        {
          'id': 'pt',
          'name': '私教课',
          'to': ''
        },
        {
          'id': 'camp',
          'name': '训练营',
          'to': ''
        },
        {
          'id': 'mall',
          'name': '运动装备',
          'to': '/baseList'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
