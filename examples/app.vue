<style lang="less">
  @import "../src/styles/index.less";

  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }

  .container {
    box-sizing: border-box;
    padding: 10px 25px;
  }

  .page-back {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>
<template>
  <div class="container">
    <nav v-if="this.$route.path === '/'">
      <components-list></components-list>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import componentsList from './componentsList'
module.exports = {
  data: function() {
    return {

    }
  },
  components: {
    componentsList
  },
  mounted: function() {
    console.log()
  },
  beforeDestroy: function() {

  },
  methods: {

  }
}
</script>
