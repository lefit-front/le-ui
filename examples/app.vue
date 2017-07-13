<template>
  <div class="container">
    <Phone class="demo-phone" @home="goBack">
      <router-view>
      </router-view>
      <readme v-if="name && name !== 'Home'" :name="name"/>
    </Phone>
  </div>
</template>
<script>
import Readme from './components/readme';
import Phone from 'vue-phone';
module.exports = {
  data: function () {
    return {

    }
  },
  components: {
    Readme,
    Phone
  },
  computed: {
    name: function () {
      return this.$route.name
    }
  },
  mounted: function () {
    console.log()
  },
  beforeDestroy: function () {

  },
  methods: {
    goBack () {
      this.$router.push({
        path: 'home'
      })
    }
  }
}
</script>

<style lang="less">

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

  .demo-phone {
    .vue-phone-content {
      padding: 10px 20px;
    }
  }
</style>
