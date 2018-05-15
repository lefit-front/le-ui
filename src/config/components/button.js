export default {
  file: 'button',
  name: 'LeButton',
  class: 'le-button',
  describe: '按钮组件',
  props: [
    {
      name: 'type',
      type: ['String'],
      describe: '按钮类型',
      default: 'primary',
      option: [
        {
          name: 'primary',
          describe: '主按钮',
          default: true
        },
        {
          name: 'default',
          describe: '普通按钮',
          default: false
        },
        {
          name: 'plain',
          describe: '幽灵按钮',
          default: false
        },
        {
          name: 'shadow',
          describe: '阴影按钮',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'size',
      type: ['String'],
      describe: '按钮尺寸',
      default: 'normal',
      option: [
        {
          name: 'normal',
          describe: '正常按钮',
          default: true
        },
        {
          name: 'large',
          describe: '大按钮',
          default: false
        },
        {
          name: 'small',
          describe: '小按钮',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'shape',
      type: ['String'],
      describe: '按钮形状',
      default: 'primary',
      option: [
        {
          name: 'primary',
          describe: '正常按钮',
          default: true
        },
        {
          name: 'circle',
          describe: '圆形按钮',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'loading',
      type: ['Boolean'],
      describe: '是否显示loading',
      default: 'false',
      option: [
        {
          name: 'false',
          describe: '不显示loading',
          default: true
        },
        {
          name: 'true',
          describe: '显示loading',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'disabled',
      type: ['Boolean'],
      describe: '是否禁用',
      default: false,
      option: [],
      required: false
    },
    {
      name: 'loadingColor',
      type: ['String'],
      describe: 'loading的颜色',
      default: '#fff',
      option: [],
      required: false
    },
    {
      name: 'loadingSize',
      type: ['Number'],
      describe: 'loading图尺寸',
      default: 10,
      option: [],
      required: false
    },
    {
      name: 'interval',
      type: ['Number'],
      describe: '设置按钮点击间隔',
      default: 0,
      option: [],
      required: false
    },
    {
      name: 'color',
      type: ['String'],
      describe: '设置按钮文字颜色',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'background',
      type: ['String'],
      describe: '设置按钮背景',
      default: '',
      option: [],
      required: false
    }
  ]
}
