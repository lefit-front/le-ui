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
    <lemo-loading type="rotate" />
     <h3>loading 设置颜色和大小</h3>
    <lemo-loading type="triple" loading-color="red" :loading-size="12" />
    <h3>loading 设置全屏</h3>
    <lemo-button @click="loadingEvent">点击查看全屏loading效果</lemo-button>
    <lemo-loading type="rotate" loading-color="red" :loading-size="22" full v-if="isFull === true" />
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
