<template>
  <div class="demo-view">
    <le-view :src="imgSrc" :defaultImg="defaultImg" :width="200" :height="200" shape="round" :fade="true" :imgStyle="{minWidth: '100%'}" />
  </div>
</template>
<script>
    export default {
      data () {
        return {
          imgSrc: '',
          defaultImg: 'https://cdn.leoao.com/m/img/blank_class.png?imageView2/2/w/200'
        }
      },
      methods: {
      }
    }
</script>
