<style>
.demo-money {

}
.demo-money{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-money">
    <h3>Money默认</h3>
    <leuv-money></leuv-money>
    <h3>Money设置大小和数值</h3>
    <leuv-money :number="number" :size="20" ></leuv-money>
    <h3>Money设置大小和数值，设置颜色</h3>
    <leuv-money :number="number" :size="20" :color="color"></leuv-money>
    <h3>Money修改money Icon</h3>
    <leuv-money :number="number" :size="20" :color="color" moneyIcon="$"></leuv-money>
    <h3>Money 字体加粗</h3>
    <leuv-money :number="number" :size="26" :color="color" moneyIcon="$" bold></leuv-money>
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
