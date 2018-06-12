export default {
  file: 'icon',
  name: 'Icon',
  class: 'le-icon',
  describe: '图片容器组件',
  props: [
    {
      name: 'type',
      type: ['String'],
      describe: '传入icon图标类名，详见 http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=174634&keyword=',
      default: '',
      option: [],
      required: true,
      example: 'logo_lefit'
    },
    {
      name: 'size',
      type: ['Number', 'String'],
      describe: 'icon尺寸大小',
      default: 12,
      option: [],
      required: false
    },
    {
      name: 'color',
      type: ['String'],
      describe: 'icon的颜色',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'symbol',
      type: ['String'],
      describe: '传入icon图标类名，需补全',
      default: '',
      option: [],
      required: false
    }
  ]
}
