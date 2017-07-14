export default {
  file: 'base-list',
  name: 'BaseList',
  class: 'le-base-list',
  describe: '基础列表',
  props: [
    {
      name: 'title',
      type: ['String'],
      describe: '列表title',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'size',
      type: ['Number'],
      describe: '设置title 和 icon的大小',
      default: '16px',
      option: [],
      required: false
    },
    {
      name: 'color',
      type: ['String'],
      describe: '设置title 和 icon的颜色',
      default: '#000',
      option: [],
      required: false
    },
    {
      name: 'to',
      type: ['String'],
      describe: '跳转路径,省略返回click事件',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'border',
      type: ['String'],
      describe: ' 0.5px bottom border,接受 block, none',
      default: 'block',
      option: [
        {
          name: 'block',
          describe: '显示0.5px border',
          default: false
        },
        {
          name: 'none',
          describe: '不显示0.5px border',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'isLink',
      type: ['Boolean'],
      describe: '箭头 icon, 接受 true, false',
      default: 'true',
      option: [],
      required: false
    },
    {
      name: 'slot',
      type: ['String'],
      describe: '右侧自定义内容',
      default: '',
      option: [],
      required: false
    }
  ]
}
