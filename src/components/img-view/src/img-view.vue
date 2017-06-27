<template>
  <div class="lemo-view">
    <div class="lemo-view-default" :class="{'lemo-view-hide': defaultImg && ready}" :style="`backgroundImage: url(${defaultImg})`"></div>
    <img v-show="ready" class="lemo-view-img" :class="{'lemo-view-show': fade && ready}" :src="img"/>
  </div>
</template>

<script>
export default {
  name: 'lemo-img-view',

  props: {
    img: {
      type: [Array, String],
      required: true
    },
    defaultImg: String,
    fade: Boolean
  },

  data () {
    return {
      value: '',
      ready: false
    }
  },

  watch: {
    value (val) {
      console.log(val)
      this.$emit('change', val)
    }
  },

  methods: {
  },

  mounted: function () {
    let img = document.querySelector('.lemo-view-img')
    img.onload = () => {
      this.ready = true
    };
  }
};
</script>

<style lang="less">
@import "../../../styles/index.less";
@imgView: lemo-view;

@keyframes hide-to-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes show-to-hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.@{imgView} {
  position: relative;
  .@{imgView}-img {
    width: 100%;
  }
  .@{imgView}-default {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .@{imgView}-show {
    animation: hide-to-show 1.5s;
    animation-fill-mode: forwards;
  }
  .@{imgView}-hide {
    animation: show-to-hide 1s;
    animation-fill-mode: forwards;
  }
}
</style>
