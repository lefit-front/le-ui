export default {
  file: 'popup',
  name: 'lePopup',
  class: 'le-popup',
  describe: '弹窗组件',
  props: [
    {
      name: 'v-modal',
      type: ['Boolean'],
      describe: '控制显示 v-model绑定的值为true显示 false消失',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'position',
      type: ['String'],
      describe: 'popup 的位置。省略则居中显示',
      default: '居中显示',
      option: [
        {
          name: 'top',
          describe: '上侧弹出',
          default: false
        },
        {
          name: 'right',
          describe: '右侧弹出',
          default: false
        },
        {
          name: 'bottom',
          describe: '底部弹出',
          default: false
        },
        {
          name: 'left',
          describe: '左侧弹出',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'modal',
      type: ['Boolean'],
      describe: '是否创建一个 modal 层',
      default: 'true',
      option: [
        {
          name: 'true',
          describe: '创建一个modal层',
          default: true
        },
        {
          name: 'false',
          describe: '不创建一个modal层',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'closeOnClickModal',
      type: ['Boolean'],
      describe: '是否可以通过点击 modal 层来关闭 popup',
      default: 'true',
      option: [
        {
          name: 'true',
          describe: '可以通过点击关闭popup',
          default: true
        },
        {
          name: 'false',
          describe: '不可以通过点击关闭popup',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'popupTransition',
      type: ['String'],
      describe: '显示/隐藏时的动效，仅在省略 position 时可配置',
      default: 'popup-slide',
      option: [
        {
          name: 'popup-slide',
          describe: '动效',
          default: true
        },
        {
          name: 'popup-fade',
          describe: '动效',
          default: false
        }
      ],
      required: false
    }
  ]
}
