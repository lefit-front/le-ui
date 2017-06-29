<style>
.demo-lemo-button {

}
.demo-lemo-button Button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-lemo-button">
    <h1>type类型</h1>
    <lemo-button type="normal">正常</lemo-button>
    <lemo-button type="border">带边框</lemo-button>
    <lemo-button type="plain">幽灵按钮</lemo-button>
    <lemo-button type="shadow">阴影按钮</lemo-button>
    <h1>禁用</h1>
    <lemo-button type="shadow" disabled>禁用</lemo-button>
    <h1>size大小</h1>
    <lemo-button type="normal" size="small">small</lemo-button>
    <lemo-button type="normal" size="normal">normal</lemo-button>
    <lemo-button type="normal" size="large">large</lemo-button>
    <h1>带loading</h1>
    <lemo-button type="normal" size="normal" loading="block">large</lemo-button>
    <h4>设置loading颜色和大小</h4>
    <lemo-button type="normal" size="normal" loading="block" loading-color="yellow" :loading-size="15">large</lemo-button>
  </div>
</template>
<script>
export default {
  mounted: function() {
  },
}
</script>
