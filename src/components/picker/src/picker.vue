<template>
  <div>
    <div class="le-picker-box"
        :class="[{
          'le-picker-show': show === true,
          'le-picker-hide': show === false
        }]">
      <div class="le-picker-head d-f j-c-s-b a-i-c">
        <span class="le-picker-head-cancel" @click="cancelEventFun">取消</span>
        <span class="le-picker-head-title">{{title}}</span>
        <span class="le-picker-head-submit" @click="submitEventFun">确定</span>
      </div>

      <div class="picker"
        :class="[{
          'ipicker-3d': rotateEffect
        }]">
        <div class="picker-toolbar" v-if="showToolbar"><slot></slot></div>
        <div class="picker-items">
          <picker-slot v-for="(slot, index) in slots" :key="index" :valueKey="valueKey" :values="slot.values || []" :text-align="slot.textAlign || 'center'" :visible-item-count="visibleItemCount" :class-name="slot.className" :flex="slot.flex" v-model="values[slot.valueIndex]" :rotate-effect="rotateEffect" :divider="slot.divider" :content="slot.content" :itemHeight="itemHeight" :default-index="slot.defaultIndex"></picker-slot>
          <div class="picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
        </div>
      </div>

    </div>

    <div class="le-picker-shadow" @click="cancelEventFun" v-show="show === true"></div>
  </div>
</template>

<script type="text/babel">
  /*eslint-env node*/
  /**
  * le-header
  * @module components/le-picker
  * @desc picker
  * @param {Array} [slots] - 数据格式 数据格式参考 mintui ：http://mint-ui.github.io/docs/#/zh-cn2/picker
  * @param {Function} [@change] - 对应change事件
  * @param {String} [title='选择'] - 默认显示 '选择'，设置title
  * @param {Function} [cancel] - 对应取消按钮事件
  * @param {Function} [submit] - 对应确定按钮事件，返回选中values值
  * @param {String} [show] - 控制组件显示和消失，并且添加了动效
  * @example
  * <Picker :slots="dataList" @change="onValuesChange" title="选择地址" :cancel="cancel" :submit="submit" :show="show"></Picker>
  *
  */
  export default {
    name: 'le-picker',
    componentName: 'picker',
    props: {
      slots: {
        type: Array
      },
      showToolbar: {
        type: Boolean,
        default: false
      },
      visibleItemCount: {
        type: Number,
        default: 5
      },
      valueKey: String,
      rotateEffect: {
        type: Boolean,
        default: false
      },
      itemHeight: {
        type: Number,
        default: 36
      },
      title: {
        type: String,
        default: '选择'
      },
      submit: Function,
      cancel: Function,
      show: {
        type: Boolean,
        default: false
      }
    },

    created() {
      this.$on('slotValueChange', this.slotValueChange);
      var slots = this.slots || [];
      this.values = [];
      var values = this.values;
      var valueIndexCount = 0;
      slots.forEach(slot => {
        if (!slot.divider) {
          slot.valueIndex = valueIndexCount++;
          values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
          this.slotValueChange();
        }
      });
    },

    methods: {
      setShow () {
        this.showFlag = 'none'
      },
      cancelEventFun () {
        this.cancel()
        this.setShow()
      },
      submitEventFun () {
        if (this.values[0] === undefined) {
          this.values[0] = this.slots[0].values[0]
        }
        this.submit(this.values)
        this.setShow()
      },
      slotValueChange() {
        if (this.values[0] === undefined) {
          this.values[0] = this.slots[0].values[0]
        }
        this.$emit('change', this, this.values);
      },

      getSlot(slotIndex) {
        var slots = this.slots || [];
        var count = 0;
        var target;
        var children = this.$children.filter(child => child.$options.name === 'picker-slot');

        slots.forEach(function(slot, index) {
          if (!slot.divider) {
            if (slotIndex === count) {
              target = children[index];
            }
            count++;
          }
        });

        return target;
      },
      getSlotValue(index) {
        var slot = this.getSlot(index);
        if (slot) {
          return slot.value;
        }
        return null;
      },
      setSlotValue(index, value) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.currentValue = value;
        }
      },
      getSlotValues(index) {
        var slot = this.getSlot(index);
        if (slot) {
          return slot.mutatingValues;
        }
        return null;
      },
      setSlotValues(index, values) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.mutatingValues = values;
        }
      },
      getValues() {
        return this.values;
      },
      setValues(values) {
        var slotCount = this.slotCount;
        values = values || [];
        if (slotCount !== values.length) {
          throw new Error('values length is not equal slot count.');
        }
        values.forEach((value, index) => {
          this.setSlotValue(index, value);
        });
      }
    },

    computed: {
      values() {
        // var slots = this.slots || [];
        var values = [];
        // slots.forEach(function(slot) {
          // if (!slot.divider) values.push(slot.value);
        // });

        return values;
      },
      slotCount() {
        var slots = this.slots || [];
        var result = 0;
        slots.forEach(function(slot) {
          if (!slot.divider) result++;
        });
        return result;
      }
    },

    components: {
      PickerSlot: require('./picker-slot.vue')
    }
  };
</script>
