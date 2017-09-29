<template>
  <div>
    默认加载:
    <img v-imgLoad="'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg'" alt="">
    放大里面的图标为0.8倍(默认放大倍数为0.4):
    <img v-imgLoad="{url: 'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg', scale: 0.8}" alt="">
    不需要动画:
    <img v-imgLoad="{url: 'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg', fadeIn: false}" alt="">
    错误的url样式:
    <img v-imgLoad="'http://s.nownews.com/瞎写一个地址'" alt="">
    自定义图片的宽高等样式
    <img class="test1" v-imgLoad="'http://s.nownews.com/cb/a7/cba7cbc8bb5f03e3f9a9385799ba8811.jpg'" alt="">
    <h3>使用方法:</h3>
    <code style="display:block">
      &lt;img v-imgLoad="url"&gt;
    </code>
    <h5>如需传对象参考下方</h5>
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
  .test1{
    width:300px;
    height: 300px;
    border-radius:50%;
    display: block;
    margin:10px auto;
  }
</style>
