<template>
  <div>
    默认加载:
    <img v-lefit-load="'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg'" alt="">
    放大里面的图标(默认放大倍数为0.4):
    <img v-lefit-load="{url: 'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg', scale: 0.8}" alt="">
    <img v-lefit-load="'http://s.nownews.com/瞎写一个地址'" alt="">
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
  img{
    width:100%;
    margin-bottom:10px;
  }
</style>
