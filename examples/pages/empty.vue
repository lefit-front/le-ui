<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-empty">
    <h1>Empty 默认</h1>
    <le-empty></le-empty>
    <h1>Empty 设置img url /text /width /size</h1>
    <le-empty src="https://cdn.leoao.com/img/%E6%97%A0%E8%A1%8C%E7%A8%8B@3x.png" text="这里是text提示" :width="120" :size="22"></le-empty>
    <h1>Empty 全屏居中</h1>
    <le-button @click="setFullEvent">点击查看效果</le-button>
    <le-empty src="https://cdn.leoao.com/img/%E6%97%A0%E8%A1%8C%E7%A8%8B@3x.png" full v-show="show"></le-empty>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted() {
  },
  methods: {
    setFullEvent () {
      this.show = true
      setTimeout(() => {
          this.show = false
      },1000)
    }
  }
}
</script>
