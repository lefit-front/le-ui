<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-button">
    <h3>Money默认</h3>
    <Money></Money>
    <h3>Money设置大小和数值</h3>
    <Money :number="number" :size="20" ></Money>
    <h3>Money设置大小和数值，设置颜色</h3>
    <Money :number="number" :size="20" :color="color"></Money>
    <h3>Money修改money Icon</h3>
    <Money :number="number" :size="20" :color="color" moneyIcon="$"></Money>
    <h3>Money 字体加粗</h3>
    <Money :number="number" :size="26" :color="color" moneyIcon="$" bold></Money>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 257,
      color: '#ff4e00'
    }
  },
  mounted() {
  },
  methods: {
    positionEvent () {
      console.log(0)
    },
    lessonEvent () {
      console.log(1)
    }
  }
}
</script>
