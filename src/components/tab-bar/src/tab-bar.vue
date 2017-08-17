<template>
  <div :class="`le-tab-bar le-tab-bar-${type} d-f a-i-c`">
    <template v-for="data in dataList">
      <div class="le-tab-bar-item d-f a-i-c" :class="[{'le-tab-bar-selected': selected === data.id}]" @click="selectedEvent({id: data.id, url: data.url})" >
        <div v-if="data.slot" class="le-tab-bar-slot" v-html="data.slot"></div>
        <div v-if="data.img" class="le-tab-bar-img" :style="`backgroundImage: url(${data.img})`"></div>
        <div v-if="data.class" class="le-tab-bar-sprite">
          <div class="le-tab-bar-sprite-img" :class="data.class"></div>
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
  methods: {
    selectedEvent (data) {
      debugger
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
