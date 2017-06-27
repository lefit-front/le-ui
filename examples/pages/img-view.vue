<template>
  <div>
    <img-view class="demo-img-view" :img="imgSrc" :defaultImg="defaultImg"/>
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
