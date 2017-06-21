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
<template>
  <div class="container">
    <nav v-if="this.$route.path === '/'">
      <ul>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {

    }
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
