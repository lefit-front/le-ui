<template>
  <div class="demo-rate">
    <leuv-rate :value="value" :margin="5" disabled @input="handleChange"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 0
      }
    },
    methods: {
      handleChange (val) {
        console.log(val);
      }
    }
  }
</script>
