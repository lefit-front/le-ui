<template>
  <div class="le-tab-bar" :class="`le-tab-bar-${type} le-tab-bar-${className} ${type === 'block' ? 'border-1px-bottom' : ''}`">
    <template v-for="data in dataList">
      <div class="le-tab-bar-item" :class="[{'le-tab-bar-selected': selected === data.id}]" @click="selectedEvent({id: data.id, url: data.url})" >
        <div v-if="data.slot" class="le-tab-bar-slot" v-html="data.slot"></div>
        <div class="le-tab-bar-sprite" v-if="data.class || data.img">
          <div v-if="data.img" class="le-tab-bar-img" :style="`backgroundImage: url(${data.img})`"></div>
          <div v-if="data.class" class="le-tab-bar-sprite-img" :class="`le-${data.class}`"></div>
          <span v-if="data.tag" class="le-tab-bar-tag">{{data.tag || 'HOT'}}</span>
        </div>
        <div class="le-tab-bar-name">
          {{data.name}}
        </div>
        <div v-if="line" :class="[{'le-tab-bar-line': selected === data.id}]" v-show=" selected === data.id "></div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'le-tab-bar',
  data () {
    return {
      selected: this.select
    }
  },
  props: {
    type: {
      type: String,
      default: 'box',
      validator (value) {
        return [
          'box',
          'block'
        ].indexOf(value) > -1
      }
    },
    select: {
      type: [String, Number],
      default: ''
    },
    dataList: {
      type: Array
    },
    line: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className: function () {
      let len = this.dataList.length
      if (len <= 5) {
        return 'flex'
      } else if (len === 6) {
        return 'flex-3'
      } else if (len === 7 || len === 8) {
        return 'flex-4'
      } else {
        return 'flex-5'
      }
    }
  },
  methods: {
    selectedEvent (data) {
      if (data.id) {
        this.$emit('change', data.id)
        this.selected = data.id
      }
      if (data.url) {
        window.location.href = data.url
      }
    }
  }
}
</script>
