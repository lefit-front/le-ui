<style>
.demo-leuv-button {

}
.demo-leuv-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-leuv-button">
    <h1>type类型</h1>
    <leuv-button>正常</leuv-button>
    <leuv-button type="default">带边框</leuv-button>
    <leuv-button type="plain">幽灵按钮</leuv-button>
    <leuv-button type="shadow">阴影按钮</leuv-button>
    <h1>禁用</h1>
    <leuv-button type="shadow" disabled>禁用</leuv-button>
    <h1>size大小</h1>
    <leuv-button size="small">small</leuv-button>
    <leuv-button size="normal">normal</leuv-button>
    <leuv-button size="large">large</leuv-button>
    <h1>带loading</h1>
    <leuv-button size="normal" loading="block">large</leuv-button>
    <h4>设置loading颜色和大小</h4>
    <leuv-button size="normal" loading="block" loading-color="yellow" :loading-size="15">large</leuv-button>
  </div>
</template>
<script>
export default {
  mounted: function() {
  },
}
</script>
