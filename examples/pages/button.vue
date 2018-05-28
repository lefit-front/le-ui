<style>
.demo-le-button {

}
.demo-le-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-le-button">
    <h1>type类型</h1>
    <le-button>正常</le-button>
    <le-button type="default">带边框</le-button>
    <le-button type="plain">幽灵按钮</le-button>
    <le-button type="shadow">阴影按钮</le-button>
    <h1>禁用</h1>
    <le-button type="shadow" disabled>禁用</le-button>
    <h1>size大小</h1>
    <le-button size="small">small</le-button>
    <le-button size="normal">normal</le-button>
    <le-button size="large">large</le-button>
    <h1>button形状</h1>
    <le-button shape="primary">primary</le-button>
    <le-button shape="circle">circle</le-button>
    <h1>带loading</h1>
    <le-button size="normal" :loading="true">large</le-button>
    <h4>设置loading颜色和大小</h4>
    <le-button size="normal" :loading="true" loading-color="yellow" :loading-size="15">large</le-button>
    <h1>设置间隔</h1>
    <le-button :interval="1000">间隔按钮</le-button>
    <h1>传入颜色</h1>
    <le-button color="red" background="black" border="green">样式按钮自定义</le-button>
  </div>
</template>
<script>
export default {
  mounted: function() {
  },
}
</script>
