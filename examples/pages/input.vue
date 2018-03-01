<template>
  <div class="">
    <h1>正常</h1>
    <le-input placeholder="hello"/>
    <h1>禁用</h1>
    <le-input placeholder="hello" disabled/>
    <h1>设置最大长度</h1>
    <le-input placeholder="hello" :maxlength="5"/>
    <h1>textarea</h1>
    <le-input placeholder="hello" type="textarea" size="large" :rows="4" :maxlength="200"/>
    <h1>只读</h1>
    <le-input value="此处只可读，不可写" placeholder="hello" readonly/>
    <h1>带icon</h1>
    <le-input placeholder="hello" icon="tip" size="large"/>
    <h1>无边框</h1>
    <le-input placeholder="hello" noBorder/>
    <h1>居中</h1>
    <le-input placeholder="hello" align="center" noBorder size="large"/>
  </div>
</template>
<script>
    export default {
      data () {
        return {
        }
      },
      methods: {
        handleEnter () {
          console.log('enter')
        }
      }
    }
</script>
