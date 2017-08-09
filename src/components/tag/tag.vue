<template>
  <div class="le-tag">
    <div class="le-tag-list">
      <div class="le-tag-item" v-for="(tag, index) in data" :class="{'le-tag-selected': isSelected(index)}" @click="handleClickTag(index)">
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
    },
    value: {
      type: Array
    }
  },
  methods: {
    isSelected (idx) {
      if (this.value > 0) {
        let res = this.value.findIndex(function (value, index, arr) {
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
