export default {
  file: 'empty',
  name: 'Empty',
  class: 'le-empty',
  describe: '空白页组件',
  props: [
    {
      name: 'src',
      type: ['String'],
      describe: '图片路径',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'text',
      type: ['String'],
      describe: '空白页文字提示',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'width',
      type: ['Number'],
      describe: 'img 图片大小',
      default: '100',
      option: [],
      required: false
    },
    {
      name: 'size',
      type: ['Number'],
      describe: '提示文字字体大小',
      default: '16',
      option: [],
      required: false
    },
    {
      name: 'full',
      type: ['Boolean'],
      describe: '是否全屏,接受true,false',
      default: 'true',
      option: [],
      required: false
    }
  ]
}
