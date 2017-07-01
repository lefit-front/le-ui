export default {
  file: 'tag',
  name: 'Tag',
  class: 'lemo-tag',
  describe: '标签组件',
  props: [
    {
      name: 'data',
      type: ['Array'],
      describe: '标签内容',
      default: '',
      option: [],
      required: true,
      example: [
        {
          name: '200-300KCal'
        },
        {
          name: '塑形',
          amount: 351
        },
        {
          name: '中等难度',
          amount: 337
        },
        {
          name: '腰腹'
        },
        {
          name: '控制力'
        }
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
      name: 'img',
      type: ['String'],
      describe: '在右边展示图片',
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
  ]
}
