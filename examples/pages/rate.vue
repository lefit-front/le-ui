<template>
  <div class="demo-rate">
    <le-rate :value="value" :margin="5" disabled @input="handleChange"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 3
      }
    },
    methods: {
      handleChange (val) {
        console.log(val);
      }
    }
  }
</script>
