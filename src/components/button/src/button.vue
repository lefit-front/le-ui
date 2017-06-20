<template>
  <button class="le-button">
    <span class="le-button-text">按钮</span>
  </button>
</template>

<script>
/**
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 */
export default {
  name: 'le-button',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  props: {}
};
</script>

<style lang="less">
</style>
