<template>
  <div class="le-progress">
    <slot name="start"></slot>
    <div class="le-progress-content">
      <div class="le-progress-runway" :style="{ height: height + 'px' }"></div>
      <div class="le-progress-progress" :style="{ width: percentage + '%', height: height + 'px' }">
        <div class="le-progress-line" :class="{'le-progress-animation': animation}" :style="{ background: endColor ? `linear-gradient(to right, ${color} 0%, ${endColor} 100%)` : color }"></div>
      </div>
    </div>
    <slot name="end"></slot>
  </div>
</template>
<script>
export default {
  name: 'le-progress',
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
