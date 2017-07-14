<template>
  <div class="demo-view">
    <le-view :src="imgSrc" :defaultImg="defaultImg" :width="200" :height="200" shape="round" :fade="true"/>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          imgSrc: 'https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg',
          defaultImg: 'https://cdn.leoao.com/m/img/blank_class.png?imageView2/2/w/200'
        }
      },
      methods: {
      }
    }
</script>
