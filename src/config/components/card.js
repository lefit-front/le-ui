export default {
  file: 'card',
  name: 'Card',
  class: 'le-card',
  describe: '卡片组件，展示信息',
  props: [
    {
      name: 'title',
      type: ['String'],
      describe: '标题',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'content',
      type: ['String'],
      describe: '内容',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'more',
      type: ['Boolean'],
      describe: '是否控制更多内容展示',
      default: true,
      option: [
        {
          name: true,
          describe: '当内容超过一定数量时隐藏，通过下拉按钮展示更多',
          default: true
        },
        {
          name: false,
          describe: '当内容超过一定数量时不隐藏',
          default: false
        }
      ],
      required: false
    }
  ],
  slot: [
    {
      name: '',
      describe: '主题位置的额外内容'
    },
    {
      name: 'left',
      describe: '左侧位置的额外内容'
    },
    {
      name: 'right',
      describe: '右侧位置的额外内容'
    }
  ]
}
