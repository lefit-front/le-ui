<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-button">
    <h1>tabBar</h1>
    <lemo-tab-bar style="background-color:#f1f1f1; font-size:29px!important" :dataList="data" :height="35" select="card"></lemo-tab-bar>
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
