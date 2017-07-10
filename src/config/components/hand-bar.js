export default {
  file: 'hand-bar',
  name: 'HandBar',
  class: 'leuv-hand-bar',
  describe: '导航组件',
  props: [
    {
      name: 'position',
      type: ['String'],
      describe: '左侧位置信息内容展示',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'lesson',
      type: ['String'],
      describe: '右侧信息,接受string',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'positionEvent',
      type: ['Function'],
      describe: '左侧位置信息点击事件',
      default: 'true',
      option: [],
      required: false
    },
    {
      name: 'lessonEvent',
      type: ['Function'],
      describe: '右侧点击事件',
      default: 'true',
      option: [],
      required: false
    },
    {
      name: 'height',
      type: ['Number'],
      describe: ' hand-bar高度',
      default: '45px',
      option: [],
      required: false
    }
  ]
}
