<!-- 打分的与展示组件 -->
<template>
  <div class="le-rate">
    <a class="le-rater-box"
    v-for="i in max" @click="handleClick(i, true)"
    :class="{'is-active':iValue > i}"
    :style="{color: colors && colors[i-1] ? colors[i-1] : '#ccc',marginRight:margin+'px',fontSize: fontSize + 'px', width: fontSize + 'px', height: fontSize + 'px', lineHeight: fontSize + 'px'}">
      <span class="le-rater-inner">
        <Icon :type="star" :style="{fontSize: fontSize + 'px', lineHeight: fontSize + 'px'}"/>
        <span class="le-rater-outer"
        :style="{color: activeColor, width: cutPercent + '%'}"
        v-if="cutPercent > 0 && cutIndex+1 === i">
          <Icon :type="star" :style="{fontSize: fontSize + 'px', lineHeight: fontSize + 'px'}"/>
        </span>
      </span>
    </a>
  </div>
</template>
<script>
import Icon from '../../icon';
export default {
  name: 'le-rate',
  components: {
    Icon
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    star: {
      type: String,
      default: 'star'
    },
    activeColor: {
      type: String,
      default: '#fdac3a'
    },
    margin: {
      type: Number,
      default: 2
    },
    fontSize: {
      type: Number,
      default: 14
    }
  },
  computed: {
    sliceValue () {
      const _val = this.iValue.toString().split('.')
      return _val.length === 1 ? [_val[0], 0] : _val
    },
    cutIndex () {
      return this.sliceValue[0] * 1
    },
    cutPercent () {
      return this.sliceValue[1] * 10
    }
  },
  data () {
    return {
      colors: [],
      iValue: 0
    }
  },
  watch: {
    value (val) {
      this.iValue = val
      this.updateStyle()
    },
    iValue () {
      this.updateStyle()
    }
  },
  methods: {
    handleClick (i, force) {
      if (!this.disabled || force) {
        if (this.iValue === i) {
          this.iValue = i
          this.updateStyle()
        } else {
          this.iValue = i
        }
        // 通过 input 事件发出数值
        this.$emit('input', Number(i))
      }
    },
    updateStyle () {
      for (var j = 0; j < this.max; j++) {
        if (j <= this.iValue - 1) {
          this.colors[j] = this.activeColor
        } else {
          this.colors[j] = '#ccc'
        }
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.iValue = this.value
      this.updateStyle()
    })
  }
}
</script>
