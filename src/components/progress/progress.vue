<template>
  <div class="leuv-progress">
    <slot name="start"></slot>
    <div class="leuv-progress-content">
      <div class="leuv-progress-runway" :style="{ height: height + 'px' }"></div>
      <div class="leuv-progress-progress" :style="{ width: percentage + '%', height: height + 'px' }">
        <div class="leuv-progress-line" :class="{'leuv-progress-animation': animation}" :style="{ background: endColor ? `linear-gradient(to right, ${color} 0%, ${endColor} 100%)` : color }"></div>
      </div>
    </div>
    <slot name="end"></slot>
  </div>
</template>
<script>
export default {
  name: 'leuv-progress',
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
