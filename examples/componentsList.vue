<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <ul>
        <li
          v-for="(item, index) in group.list"
          :key="index">
          <router-link :to="item.path">
            <i :class="['nav-icon', 'icon-' + item.icon]"></i>
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
</style>

<script type="text/babel">
  import { navs } from './route';

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
