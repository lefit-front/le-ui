<template>
  <div class="container">
    <nav v-if="this.$route.path === '/'">
      <components-list></components-list>
    </nav>
    <router-view></router-view>
    <readme v-if="$route.name" :name="$route.name"/>
  </div>
</template>
<script>
import componentsList from './componentsList'
import Readme from './components/readme';
module.exports = {
  data: function () {
    return {

    }
  },
  components: {
    componentsList,
    Readme
  },
  mounted: function () {
    console.log()
  },
  beforeDestroy: function () {

  },
  methods: {

  }
}
</script>

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
