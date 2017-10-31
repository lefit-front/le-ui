<template>
  <div class="">
    <le-input value="12" placeholder="hello" @on-enter="handleEnter"/>
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
