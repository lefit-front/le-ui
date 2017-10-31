<template>
  <div class="le-tag">
    <div class="le-tag-list">
      <div class="le-tag-item" v-for="(tag, index) in data" :class="{'le-tag-selected': isSelected(index)}" @click="handleClickTag(index)">
        <span class="le-tag-name">{{name ? tag[name] : tag.name}}</span>
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
    },
    value: {
      type: Array
    },
    name: {
      type: String
    }
  },
  methods: {
    isSelected (idx) {
      if (this.value && this.value.length > 0) {
        let res = this.value.findIndex(function (value) {
          return value === idx
        })
        return res !== -1
      }
    },
    handleClickTag (idx) {
      this.$emit('select', idx)
    }
  }
};
</script>
