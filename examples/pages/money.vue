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
    <le-money></le-money>
    <h3>Money设置大小和数值</h3>
    <le-money :number="number" :size="20" ></le-money>
    <h3>Money设置大小和数值，设置颜色</h3>
    <le-money :number="number" :size="20" :color="color"></le-money>
    <h3>Money修改money Icon</h3>
    <le-money :number="number" :size="20" :color="color" moneyIcon="$"></le-money>
    <h3>Money 字体加粗</h3>
    <le-money :number="number" :size="26" :color="color" moneyIcon="$" bold></le-money>
    <h3>Money 删除线</h3>
    <le-money :number="number" :size="26" :color="color" moneyIcon="$" line></le-money>
    <h3>Money 千分符</h3>
    <le-money :number="number" :size="20" split ></le-money>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: 25701,
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
