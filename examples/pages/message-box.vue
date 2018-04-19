<template>
  <div class="page-msgbox">
    <h1 class="page-title">Message Box</h1>
    <div class="page-msgbox-wrapper">
      <le-button class="demo-button" @click.native="openAlert" size="large">打开 alert 提示框</le-button>
      <le-button class="demo-button" @click.native="openConfirm" size="large">打开 confirm 提示框</le-button>
      <le-button class="demo-button" @click.native="openPrompt" size="large">打开 prompt 提示框</le-button>
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
  // 组件内单独引入message-box组件
  // import { MessageBox } from '../../src/index';
  export default {
    methods: {
      openAlert() {
        this.$msg.alert('操作成功!', '提示');
      },

      openConfirm() {
        this.$msg.confirm('确定执行此操作?', '提示');
      },

      openPrompt() {
        this.$msg.prompt(' ', '请输入姓名', {
          placeholder: '请输入姓名123',
          maxlength: 80,
          inputType: 'textarea'
        }).then(({ value }) => {
          if (value) {
            this.$msg.alert(`你的名字是 ${ value }`, '输入成功');
          }
        });
      }
    }
  };
</script>
