export default {
  file: 'tag',
  name: 'Tag',
  class: 'le-tag',
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
      ]
    },
    {
      name: 'value',
      type: ['Array'],
      describe: '选中的tag',
      default: [],
      option: []
    },
    {
      name: 'key',
      type: ['String'],
      describe: '用于替换data中name的key值',
      default: '',
      option: []
    }
  ]
}
