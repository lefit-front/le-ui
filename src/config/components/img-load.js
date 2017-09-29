export default {
  file: 'imgLoad',
  name: 'imgLoad',
  describe: '图片加载插件',
  props: [
    {
      name: 'url',
      type: ['String'],
      describe: '图片链接',
      default: '',
      option: [],
      required: true,
      example: 'logo_lefit'
    },
    {
      name: 'fadeIn',
      type: ['Boolean'],
      describe: '是否需要动画',
      default: true,
      option: [],
      required: false
    },
    {
      name: 'scale',
      type: ['Number'],
      describe: '占位图放大的比例',
      default: 0.4,
      option: [],
      required: false
    }
  ]
}
