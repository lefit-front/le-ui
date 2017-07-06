<template>
  <div class="leuv-tag">
    <div class="leuv-tag-list">
      <div class="leuv-tag-item" v-for="(tag, index) in data">
        <span class="leuv-tag-name">{{tag.name}}</span>
        <span v-if="tag.amount" class="leuv-tag-num">{{tag.amount}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leuv-tag',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/index.less";

@tag: leuv-tag;
.@{tag} {
  overflow: hidden;
  .@{tag}-list {
    display: flex;
    align-items: center;
    font-size: @tag-font-size;
    flex-wrap: wrap;
    margin: 0 -5px;
  }
  .@{tag}-item {
    padding: 1px 10px;
    border: 1px solid #6e6e6e;
    border-radius: 10px;
    margin: 3px 5px;
    .@{tag}-name {
      font-family: "DIN-Bold";
      color: @sub-text-color;
    }
    .@{tag}-num {
      color: @border-color-base;
    }
  }
}
</style>
