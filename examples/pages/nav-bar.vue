<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-button">
    <h1>NavBar</h1>
    <leuv-nav-bar :height="45" style="background:#f1f1f1" :dataList="data" select="bl"></leuv-nav-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          'id': 'cl',
          'name': '约课',
          'to': ''
        },
        {
          'id': 'bl',
          'name': '购买',
          'to': ''
        },
        {
          'id': 'ml',
          'name': '我的课程',
          'to': ''
        },
        {
          'id': 'userCenter',
          'name': '个人课程',
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
