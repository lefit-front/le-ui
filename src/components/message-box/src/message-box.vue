<template>
  <div class="le-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="le-msgbox" v-show="value">
        <div class="le-msgbox-header" v-if="title !== ''">
          <div class="le-msgbox-title">{{ title }}</div>
        </div>
        <div class="le-msgbox-content" v-if="message !== ''">
          <div class="le-msgbox-message" v-html="message"></div>
          <div class="le-msgbox-input border-1px-bottom" v-show="showInput">
            <le-input v-model="inputValue" :placeholder="placeholder" ref="input" align="center" :noBorder="!inputBorder" size="large" :type="inputType" :maxlength="maxlength" :rows="rows || parseInt(maxlength/20)" :autofocus="true"/>
            <div class="le-msgbox-errormsg" v-if="!!editorErrorMessage" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="le-msgbox-btns">
          <LeButton :class="[ cancelButtonClasses ]" type="plain" v-show="showCancelButton" @click="handleAction('cancel')" shape="circle">{{ cancelButtonText }}</LeButton>
          <LeButton :class="[ confirmButtonClasses ]" :size="showCancelButton ? 'normal' : 'large'" v-show="showConfirmButton" @click="handleAction('confirm')" shape="circle" :background="buttonBackground" :color="buttonColor">{{ confirmButtonText }}</LeButton>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';

  import LeButton from '../../button';
  import LeInput from '../../input';
  import Popup from '../../../utils/popup';

  export default {
    name: 'le-message-box',
    mixins: [ Popup ],
    components: {
      LeButton,
      LeInput
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
      },
      placeholder: {
        type: String,
        default: '请输入'
      },
      maxlength: {
        type: Number
      },
      rows: {
        type: Number
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      buttonBackground: {
        type: String
      },
      buttonColor: {
        type: String
      }
    },

    computed: {
      confirmButtonClasses() {
        let classes = 'le-msgbox-btn le-msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' le-msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'le-msgbox-btn le-msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' le-msgbox-cancel-highlight';
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
        // this.$refs.input.classList.remove('invalid');
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
