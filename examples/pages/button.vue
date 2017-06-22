<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-button">
    <h1>type类型</h1>
    <Button type="normal">正常</Button>
    <Button type="border">带边框</Button>
    <Button type="plain">幽灵按钮</Button>
    <Button type="shadow">阴影按钮</Button>
    <h1>禁用</h1>
    <Button type="shadow" disabled>禁用</Button>
    <h1>size大小</h1>
    <Button type="normal" size="small">small</Button>
    <Button type="normal" size="normal">normal</Button>
    <Button type="normal" size="large">large</Button>
    <h1>带loding</h1>
    <Button type="normal" size="normal" loding="block">large</Button>
    <h4>设置loding颜色和大小</h4>
    <Button type="normal" size="normal" loding="block" loding-color="yellow" loding-size="15">large</Button>
  </div>
</template>
<script>
export default {
  mounted: function() {
  },
}
</script>
