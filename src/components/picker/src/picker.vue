<template>
  <div>
    <div class="lemo-picker-box"
        :class="[{
          'lemo-picker-show': show === 'block',
          'lemo-picker-hide': show === 'none'
        }]">
      <div class="lemo-picker-head d-f j-c-s-b a-i-c">
        <span class="lemo-picker-head-cancel" @click="cancelEventFun">取消</span>
        <span class="lemo-picker-head-title">{{title}}</span>
        <span class="lemo-picker-head-submit" @click="submitEventFun">确定</span>
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

    <div class="lemo-picker-shadow" @click="cancelEventFun" v-show="show === 'block'"></div>
  </div>
</template>

<script type="text/babel">
  /**
  * lemo-header
  * @module components/lemo-picker
  * @desc picker
  * @param {Array} [slots] - 数据格式 数据格式参考 mintui ：http://mint-ui.github.io/docs/#/zh-cn2/picker
  * @param {Function} [@change] - 对应change事件
  * @param {String} [title='选择'] - 默认显示 '选择'，设置title
  * @param {Function} [cancel] - 对应取消按钮事件
  * @param {Function} [submit] - 对应确定按钮事件，返回选中values值
  * @param {String} [show] - 控制组件显示和消失，并且添加了动效，接受block,none
  * @example
  * <Picker :slots="dataList" @change="onValuesChange" title="选择地址" :cancel="cancel" :submit="submit" :show="show"></Picker>
  *
  */
  export default {
    name: 'lemo-picker',
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
        type: String,
        default: 'block',
        validator (value) {
          return [
            'block',
            'none'
          ].indexOf(value) > -1
        }
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
        var slots = this.slots || [];
        var values = [];
        slots.forEach(function(slot) {
          // if (!slot.divider) values.push(slot.value);
        });

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

<style lang="less">
  @import "../../../styles/index.less";
  @msgbox: lemo-picker;
  .@{msgbox}-box{
    position:fixed;
    width:100%;
    bottom:0;
    z-index:2000;
  }
  .@{msgbox}-head{
    width:100%;
    height:40px;
    background-color:#f1f1f1;
  }
  .@{msgbox}-head-title{
    font-size:@font-size-h3;
    color:@text-color;
    font-weight:bold;
  }
  .@{msgbox}-head-cancel{
    font-size:@font-size-h5;
    color:@text-color;
    opacity: 0.6;
    margin-left:15px;
  }
  .@{msgbox}-head-submit{
    font-size:@font-size-h5;
    color:@primary-color;
    margin-right:15px;
  }
  .@{msgbox}-shadow{
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index:10;
  }
  .@{msgbox}-hide {
    animation: hide-to-bottom 0.1s;
    animation-fill-mode: forwards;
    -webkit-animation: hide-to-bottom 0.1s;
    -webkit-animation-fill-mode: forwards;
  }
  .@{msgbox}-show {
    animation: show-from-bottom 0.3s;
    animation-fill-mode: forwards;
    -webkit-animation: show-from-bottom 0.3s;
    -webkit-animation-fill-mode: forwards;
  }
  @keyframes hide-to-bottom {
    from {
      bottom: 0;
      display:none;
    }
    to {
      bottom: -800px;
      display:none;
    }
  }
  @keyframes show-from-bottom {
    from {
      bottom: -800px;
    }
    to {
      bottom: 0;
      display:block;
    }
  }
    /*flex布局 css兼容*/
  .d-f{
    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
  }
  /*横向 两端对齐，项目之间的间隔都相等*/
  .j-c-s-b{
    -webkit-justify-content:space-between;
    justify-content:space-between;
    -moz-box-pack:space-between;
    -webkit--moz-box-pack:space-between;
    box-pack:space-between;
  }
  /*竖向居中*/
  .a-i-c{
    align-items:center;
    -webkit-align-items:center;
    box-align:center;
    -moz-box-align:center;
    -webkit-box-align:center;
  }
  .j-c-s-a{
    -webkit-justify-content:space-around;
    justify-content:space-around;
    -moz-box-pack:space-around;
    -webkit--moz-box-pack:space-around;
    box-pack:space-around;
  }
  .picker {
    overflow: hidden;
    background:#fff;
  }

  .picker-toolbar {
    height: 40px;
  }

  .picker-items {
    display: flex;
    justify-content: center;
    padding: 0;
    text-align: right;
    font-size: 24px;
    position: relative;
  }

  .picker-center-highlight {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -18px;
    pointer-events: none
  }

  .picker-center-highlight:before,
  .picker-center-highlight:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #eaeaea;
    display: block;
    z-index: 15;
    transform: scaleY(0.5);
  }

  .picker-center-highlight:before {
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
  }

  .picker-center-highlight:after {
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
  }
</style>
