<template>
  <div class="le-tag" :class="{'le-tag-selected': select}" @click="handleClick(data)">
    <span class="le-tag-name">{{name ? data[name] : data.name}}</span>
    <span v-if="data.amount" class="le-tag-num">{{data.amount}}</span>
  </div>
</template>
<script>
export default {
  name: 'le-tag',
  props: {
    data: {
      type: Object,
      required: true
    },
    select: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  methods: {
    handleClick (data) {
      this.$emit('click', data)
    }
  }
};
</script>
