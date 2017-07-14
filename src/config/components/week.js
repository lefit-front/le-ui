export default {
  file: 'week',
  name: 'Week',
  class: 'le-week',
  describe: '一周日期选择组件',
  props: [
    {
      name: 'data',
      type: ['Array'],
      describe: '选择器的初始数据，数组中的每一项必须包含name，content可选，例如：[{name: "今天", content: "06.24"}]',
      default: '',
      option: [],
      required: true,
      example: [
        {
          id: 0,
          name: '今天',
          content: '06.24'
        },
        {
          id: 1,
          name: '周日',
          content: '06.25'
        },
        {
          id: 2,
          name: '周一',
          content: '06.26'
        },
        {
          id: 3,
          name: '周二',
          content: '06.27'
        },
        {
          id: 4,
          name: '周三',
          content: '06.28'
        },
        {
          id: 5,
          name: '周四',
          content: '06.29'
        },
        {
          id: 6,
          name: '周五',
          content: '06.30'
        }
      ]
    },
    {
      name: 'active',
      type: ['Number'],
      describe: '当前选择的日期的key值',
      default: 0,
      option: [],
      required: false
    }
  ]
}
