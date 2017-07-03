<template>
  <div class="lemo-progress">
    <slot name="start"></slot>
    <div class="lemo-progress-content">
      <div class="lemo-progress-runway" :style="{ height: height + 'px' }"></div>
      <div class="lemo-progress-progress" :style="{ width: percentage + '%', height: height + 'px' }">
        <div class="lemo-progress-line" :class="{'lemo-progress-animation': animation}" :style="{ background: endColor ? `linear-gradient(to right, ${color} 0%, ${endColor} 100%)` : color }"></div>
      </div>
    </div>
    <slot name="end"></slot>
  </div>
</template>
<script>
export default {
  name: 'lemo-progress',
  props: {
    percentage: {
      type: [Number, String],
      required: true
    },
    height: {
      type: [Number, String],
      default: 5
    },
    color: {
      type: String,
      default: '#ffad26'
    },
    endColor: String,
    animation: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less">
@import "../../styles/index.less";

@keyframes show-up {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@progress: lemo-progress;
.@{progress} {
  position: relative;
  display: flex;
  height: 30px;
  line-height: 30px;
  & > * {
    display: flex;
    display: -webkit-box;
  }

  & *[slot="start"] {
    margin-right: 5px;
  }

  & *[slot="end"] {
    margin-left: 5px;
  }
  .@{progress}-content {
    position: relative;
    flex: 1;
  }
  .@{progress}-runway {
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    left: 0;
    right: 0;
    background-color: #ebebeb;
    height: 3px;
  }
  .@{progress}-progress {
    position: absolute;
    display: block;
    top: 50%;
    transform: translate(0, -50%);
    width: 0;
  }
  .@{progress}-line {
    width: 100%;
    height: 100%;
  }
  .@{progress}-animation {
    width: 0;
    animation: show-up 1s;
    animation-fill-mode: forwards;
  }
}
</style>
