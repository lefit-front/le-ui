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
