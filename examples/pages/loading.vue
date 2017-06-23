<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-button">
    <h3>loading默认</h3>
    <Loading type="rotate"></Loading>
     <h3>loading 设置颜色和大小</h3>
    <Loading type="rotate" loading-color="red" loading-size="28"></Loading>
    <h3>loading 设置全屏</h3>
    <Button @click="loadingEvent">点击查看全屏loading效果</Button>
    <Loading type="rotate" loading-color="red" loading-size="22" full v-if="isFull === true"></Loading>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 257,
      color: '#ff4e00',
      isFull: false
    }
  },
  mounted() {
  },
  methods: {
    loadingEvent () {
      this.isFull = true
      setTimeout(() => {
        this.isFull = false
      },1000)
    }
  }
}
</script>
