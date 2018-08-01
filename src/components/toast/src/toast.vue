<template>
  <div class="le-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
    <div v-if="!$slots.default" class="le-toast-content">
      <le-icon class="le-toast-icon" />
      <i class="le-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="le-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }" v-html="message"></span>
    </div>
  </div>
</template>
<script>
import leIcon from '../../icon'
export default {
  name: 'le-toast',
  props: {
    message: String,
    icon: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    iconClass: {
      type: String,
      default: ''
    }
  },

  components: {
    leIcon
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    customClass() {
      var classes = [];
      switch (this.position) {
        case 'top':
          classes.push('is-placetop');
          break;
        case 'bottom':
          classes.push('is-placebottom');
          break;
        default:
          classes.push('is-placemiddle');
      }
      classes.push(this.className);

      return classes.join(' ');
    }
  }
};
</script>
