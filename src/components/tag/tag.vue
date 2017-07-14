<template>
  <div class="le-tag">
    <div class="le-tag-list">
      <div class="le-tag-item" v-for="(tag, index) in data">
        <span class="le-tag-name">{{tag.name}}</span>
        <span v-if="tag.amount" class="le-tag-num">{{tag.amount}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'le-tag',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>
