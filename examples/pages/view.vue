<template>
  <div class="demo-view">
    <le-view :src="imgSrc" :width="200" :height="200" shape="round" :fade="true" :imgStyle="{minWidth: '100%'}" />
  </div>
</template>
<script>
    export default {
      data () {
        return {
          imgSrc: 'https://cdn.leoao.com/o_1blil75gs1p2u1kpm5pp1ov51rfq8.png',
          defaultImg: 'https://cdn.leoao.com/m/img/blank_class.png?imageView2/2/w/200'
        }
      },
      methods: {
      }
    }
</script>
