<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
</style>
<template>
  <div class="demo-button">
    <h1>HandBar</h1>
    <le-hand-bar :height="45" style="background:#f1f1f1" :position="position" :lesson="lesson" :positionEvent="positionEvent" :lessonEvent="lessonEvent"></le-hand-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      position: '杭州市西湖区创立方店',
      lesson: '团操课'
    }
  },
  mounted() {
  },
  methods: {
    positionEvent () {
      console.log(0)
    },
    lessonEvent () {
      console.log(1)
    }
  }
}
</script>
