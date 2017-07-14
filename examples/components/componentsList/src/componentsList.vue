<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <!-- <div class="page-title" v-text="group.title"></div> -->
      <le-base-list v-if="item.name !== 'Home'" v-for="(item, index) in group.list" :title="item.name" :to="item.path" :key="index"/>
    </div>
  </section>
</template>

<script type="text/babel">
  import { navs } from '../../../route';

  export default {
    name: 'components-list',

    data() {
      return {
        navs: []
      };
    },

    created() {
      this.navs = navs;
    }
  };
</script>

<style lang="less" scoped>
  .page-demo {
  }
</style>
