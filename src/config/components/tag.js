export default {
  file: 'tag',
  name: 'Tag',
  class: 'leuv-tag',
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
    }
  ]
}
