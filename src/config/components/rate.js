export default {
  file: 'rate',
  name: 'Rate',
  class: 'lemo-rate',
  describe: '评分组件',
  props: [
    {
      name: 'max',
      type: ['Number'],
      describe: '评分数上限',
      default: 5,
      option: [],
      required: false
    },
    {
      name: 'value',
      type: ['Number'],
      describe: '默认初始评分',
      default: 0,
      option: [],
      required: false
    },
    {
      name: 'disabled',
      type: ['Boolean'],
      describe: '评分是否可操作',
      default: 0,
      option: [
        {
          name: true,
          describe: '评分可操作',
          default: true
        },
        {
          name: false,
          describe: '评分不操作',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'star',
      type: ['String'],
      describe: '评分图标（目前需要在icon中引入）',
      default: 'wujiaoxingshixin',
      option: [],
      required: false
    },
    {
      name: 'activeColor',
      type: ['Number'],
      describe: '默认初始评分',
      default: 0,
      option: [],
      required: false
    },
    {
      name: 'margin',
      type: ['Number'],
      describe: '评分图标之间的间距',
      default: 2,
      option: [],
      required: false
    },
    {
      name: 'fontSize',
      type: ['Number'],
      describe: '评分图标的大小',
      default: 14,
      option: [],
      required: false
    }
  ]
}
