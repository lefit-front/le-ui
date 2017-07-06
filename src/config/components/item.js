export default {
  file: 'item',
  name: 'Item',
  class: 'leuv-item',
  describe: '店铺列表组件',
  props: [
    {
      name: 'name',
      type: ['String'],
      describe: '名称',
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
      name: 'img',
      type: ['String'],
      describe: '左侧预览图片',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'icon',
      type: ['String'],
      describe: '右侧图标',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'more',
      type: ['String', 'Number'],
      describe: '右侧提示文字',
      default: '',
      option: [],
      required: false
    }
  ]
}
