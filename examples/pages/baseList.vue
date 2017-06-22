<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-button">
    <h1>基础列表 文字大小和颜色可以继承,默认16px,黑色</h1>
    <base-list title="优惠卷" style="color:red;font-size:26px">
      <div>这里是自定义内容</div>
    </base-list>
    <h1>添加右侧箭头</h1>
    <base-list title="优惠卷" is-link></base-list>
    <h1>设置跳转</h1>
    <base-list title="优惠卷" to="/button">
      <div>点击跳转path</div>
    </base-list>
    <h1>取消bttom border</h1>
    <base-list title="优惠卷" to="/button" border="none">
      <div>自定义内容</div>
    </base-list>
    <h1>省略props to 触发点击事件</h1>
    <base-list title="优惠卷" @click="jump">
      <div>点击跳转path</div>
    </base-list>
  </div>
</template>
<script>
export default {
  mounted() {
  },
  methods: {
    jump () {
      alert("触发自定义事件")
    }
  }
}
</script>