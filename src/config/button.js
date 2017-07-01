export default {
  file: 'button',
  name: 'LemoButton',
  class: 'lemo-button',
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
      name: 'loading',
      type: ['String'],
      describe: '是否显示loading',
      default: 'none',
      option: [
        {
          name: 'none',
          describe: '不显示loading',
          default: true
        },
        {
          name: 'block',
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
    }
  ]
}
