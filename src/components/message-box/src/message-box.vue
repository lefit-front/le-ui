<template>
  <div class="lemo-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="lemo-msgbox" v-show="value">
        <div class="lemo-msgbox-header" v-if="title !== ''">
          <div class="lemo-msgbox-title">{{ title }}</div>
        </div>
        <div class="lemo-msgbox-content" v-if="message !== ''">
          <div class="lemo-msgbox-message" v-html="message"></div>
          <div class="lemo-msgbox-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="lemo-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="lemo-msgbox-btns">
          <LemoButton :class="[ cancelButtonClasses ]" type="plain" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</LemoButton>
          <LemoButton :class="[ confirmButtonClasses ]" :size="showCancelButton ? 'normal' : 'large'" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</LemoButton>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';

  import LemoButton from '../../button';
  import Popup from '../../../utils/popup';

  export default {
    name: 'lemo-message-box',
    mixins: [ Popup ],
    components: {
      LemoButton
    },
    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },

    computed: {
      confirmButtonClasses() {
        let classes = 'lemo-msgbox-btn lemo-msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' lemo-msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'lemo-msgbox-btn lemo-msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' lemo-msgbox-cancel-highlight';
        }
        return classes;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },

      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },

      inputType(val) {
        this.handleInputType(val);
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>



<style lang="less" scoped>
  @import "../../../styles/index.less";
  @import "../../popup/src/popup.less";
  @msgbox: lemo-msgbox;
  @padding: 25px;
  @btn-space: 8px;
  .@{msgbox} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 85%;
    border-radius: 6px;
    font-size: 12px;
    -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: .2s;

    .@{msgbox}-header {
      padding: @padding 0 0;
    }

    .@{msgbox}-content {
      padding: 0 @padding 0;
      position: relative;
      margin-top: 15px;
    }

    .@{msgbox}-input {
      padding-top: 15px;
      & input {
        border: 1px solid #dedede;
        border-radius: 5px;
        padding: 4px 5px;
        width: 100%;
        appearance: none;
        outline: none;
      }
      & input.invalid {
        border-color: #ff4949;
        &:focus {
          border-color: #ff4949;
        }
      }
    }

    .@{msgbox}-errormsg {
      color: red;
      font-size: 12px;
      min-height: 18px;
      margin-top: 2px;
    }

    .@{msgbox}-title {
      font-family: 'PingFang-SC-Semibold';
      text-align: center;
      padding-left: 0;
      margin-bottom: 0;
      font-size: 18px;
      font-weight: bold;
      color: @text-color;
    }

    .@{msgbox}-message {
      font-family: 'PingFangSC-Regular';
      color: @sub-text-color;
      margin: 0;
      text-align: left;
      line-height: 16px;
    }

    .@{msgbox}-btns {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding: calc(@padding - @btn-space);
      justify-content: space-between;

    }
    .@{msgbox}-cancel {
      flex-grow: 2;
      margin: 0 @btn-space;
      border-color: rgba(0, 0, 0, 0.1);
    }
    .@{msgbox}-confirm {
      flex-grow: 2;
      margin: 0 @btn-space;
    }
  }

  .msgbox-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .msgbox-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>
