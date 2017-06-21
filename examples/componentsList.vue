<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <mt-cell
        v-for="(item, index) in group.list"
        :key="index"
        :to="item.path"
        is-link>
        <div slot="title">
          <i :class="['nav-icon', 'icon-' + item.icon]"></i>
          <span>{{item.name}}</span>
        </div>
      </mt-cell>
    </div>
  </section>
</template>

<style>
</style>

<script type="text/babel">
  import { navs } from './route';

  export default {
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
