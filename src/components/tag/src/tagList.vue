<template>
  <div class="le-tag-list">
    <tag class="le-tag-item" v-for="(tag, index) in data" :key="index" :data="tag" :select="isSelected(index)" @click="handleClickTag(index)" :name="name">
    </tag>
  </div>
</template>
<script>
import tag from './tag.vue'
export default {
  name: 'le-tag-list',
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
  components: {
    tag
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
    handleClickTag (idx, d) {
      this.$emit('select', idx, d)
    }
  }
};
</script>
