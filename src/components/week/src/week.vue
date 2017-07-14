<template>
  <div class="le-week">
    <div class="le-week-nav" v-show="Array.isArray(data) && data.length">
      <div
        class="le-week-item"
        v-for="(item, index) in data"
        :class="{'is-selected': curIndex === index}"
        @click="selectDate(item, index)">
        <div class="le-week-item-label">
          <p class="title">{{item.name}}</p>
          <p class="content">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'le-week',
  props: {
    data: {
      type: Array,
      required: true,
      validator: function (data) {
        return data.length > 0
      }
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      curIndex: this.active
    }
  },
  watch: {
    active (val) {
      this.curIndex = val
    }
  },
  methods: {
    selectDate (item, index) {
      this.curIndex = index
      this.$emit('select', item, index)
    }
  },
  mounted () {
    this.$nextTick(function () {
    })
  }
}
</script>
