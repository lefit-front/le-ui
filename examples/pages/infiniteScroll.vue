<template>
  <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <li v-for="item in list">{{ item }}</li>
  </ul>
</template>
<script>
    export default {
      data () {
        return {
          list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24]
        }
      },
      methods: {
        loadMore () {
          this.loading = true;
          setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
          }, 2500);
        }
      }
    }
</script>
<style lang="less">
  ul {
    padding-left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  li {
    list-style-type: none;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
</style>
