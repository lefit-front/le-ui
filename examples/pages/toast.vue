<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <le-button class="demo-button" @click.native="openToast" size="large">打开 alert 提示框</le-button>
    </div>
  </div>
</template>

<style lang="less">
  .page-toast-wrapper {
    .demo-button {
      margin: 10px 0;
    }
  }
</style>

<script type="text/babel">
  export default {
    methods: {
      openToast() {
        this.$toast({
          message: 'hello world',
          duration: -1
        })
      }
    }
  };
</script>
