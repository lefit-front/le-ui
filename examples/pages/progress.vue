<template>
  <div>
    <lemo-progress class="demo-progress" :value="value" :animation="true" :endColor="endColor" />
  </div>
</template>
<script>
    export default {
      data () {
        return {
          value: 20,
          endColor: '#fff'
        }
      }
    }
</script>
