<template>
  <div class="">
    <le-switch v-model="value1"/>
    <le-switch v-model="value2" size="small">选项</le-switch>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value1: true,
        value2: true
      }
    },
    methods: {
    }
  }
</script>
