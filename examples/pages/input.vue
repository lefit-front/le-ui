<template>
  <div class="">
    <h1>正常</h1>
    <le-input placeholder="hello" @on-enter="handleEnter"/>
    <h1>禁用</h1>
    <le-input placeholder="hello" @on-enter="handleEnter" disabled/>
    <h1>设置最大长度</h1>
    <le-input placeholder="hello" @on-enter="handleEnter" :maxlength="5"/>
    <h1>textarea</h1>
    <le-input placeholder="hello" @on-enter="handleEnter" type="textarea" :rows="4"/>
    <h1>只读</h1>
    <le-input value="此处只可读，不可写" placeholder="hello" @on-enter="handleEnter" readonly/>
    <h1>带icon</h1>
    <le-input placeholder="hello" @on-enter="handleEnter" icon="lefit"/>
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
