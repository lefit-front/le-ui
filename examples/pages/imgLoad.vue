<template>
  <div>
    默认加载:
    <img v-lefit-load="'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg'" alt="">
    放大里面的图标为0.8倍(默认放大倍数为0.4):
    <!-- <img v-lefit-load="{url: 'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg', scale: 0.8}" alt=""> -->
    不需要动画:
    <!-- <img v-lefit-load="{url: 'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg', fadeIn: false}" alt=""> -->
    错误的url样式:
    <!-- <img v-lefit-load="'http://s.nownews.com/瞎写一个地址'" alt=""> -->
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
