<template>
  <div class="lemo-view" :class="shape ? 'lemo-view-' + shape : ''" :style="`width: ${width}px; height: ${height}px`">
    <div v-if="defaultImg && defaultShow" class="lemo-view-default" :class="{'lemo-view-hide': ready}" :style="`backgroundImage: url(${defaultImg})`"></div>
    <img v-show="ready" class="lemo-view-img" :class="[{'lemo-view-show': fade && ready}, {'lemo-view-cover': cover}]" :src="src" @load="handleImgReady"/>
  </div>
</template>

<script>
export default {
  name: 'lemo-view',

  props: {
    src: {
      type: [Array, String],
      required: true
    },
    width: {
      type: [Number, String],
      default: 200
    },
    height: {
      type: [Number, String],
      default: 200
    },
    defaultImg: String,
    fade: Boolean,
    shape: {
      type: String,
      validator (value) {
        return [
          'normal',
          'round'
        ].indexOf(value) > -1
      },
      default: 'normal'
    },
    cover: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      value: '',
      ready: false,
      defaultShow: true
    }
  },

  watch: {
    value (val) {
      // console.log(val)
      this.$emit('change', val)
    }
  },

  methods: {
    handleImgReady () {
      this.ready = true
      this.defaultShow = false
    }
  },

  mounted: function () {
  }
};
</script>

<style lang="less">
@import "../../../styles/index.less";
@View: lemo-view;

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

.@{View} {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .@{View}-img {
    max-width: 100%;
    max-height: 100%;
  }
  .@{View}-cover {
    min-width: 100%;
    min-height: 100%;
    max-width: 120%;
    max-height: 120%;
  }
  .@{View}-default {
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
  .@{View}-show {
    animation: hide-to-show 1.5s;
    animation-fill-mode: forwards;
  }
  .@{View}-hide {
    animation: show-to-hide 1s;
    animation-fill-mode: forwards;
  }
}

.@{View}-round {
  border-radius: 100%
}
</style>
