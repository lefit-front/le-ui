<template>
  <div class="demo-rate">
    <Rate :value="value" :margin="5" disabled />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 2
      }
    },
    methods: {
    }
  }
</script>
