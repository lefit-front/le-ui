<template>
  <div class="page-msgbox">
    <h1 class="page-title">Message Box</h1>
    <div class="page-msgbox-wrapper">
      <Button class="demo-button" @click.native="openAlert" size="large">打开 alert 提示框</Button>
      <Button class="demo-button" @click.native="openConfirm" size="large">打开 confirm 提示框</Button>
      <Button class="demo-button" @click.native="openPrompt" size="large">打开 prompt 提示框</Button>
    </div>
  </div>
</template>

<style lang="less">
  .page-msgbox-wrapper {
    .demo-button {
      margin: 10px 0;
    }
  }
</style>

<script type="text/babel">
  import { MessageBox } from '../../src/index';
  export default {
    methods: {
      openAlert() {
        MessageBox.alert('操作成功!', '提示');
      },

      openConfirm() {
        MessageBox.confirm('确定执行此操作?', '提示');
      },

      openPrompt() {
        MessageBox.prompt(' ', '请输入姓名').then(({ value }) => {
          if (value) {
            MessageBox.alert(`你的名字是 ${ value }`, '输入成功');
          }
        });
      }
    }
  };
</script>
