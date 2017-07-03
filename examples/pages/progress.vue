<template>
  <div>
    <lemo-progress class="demo-progress" :percentage="percentage" :animation="true" :endColor="endColor" />
  </div>
</template>
<script>
    export default {
      data () {
        return {
          percentage: 20,
          endColor: '#ff7600'
        }
      }
    }
</script>
