export default {
  file: 'toast',
  name: 'Toast',
  class: 'le-toast',
  describe: '弹层组件',
  props: [
    {
      name: 'message',
      type: ['String'],
      describe: '文本内容，支持html',
      default: '',
      option: []
    },
    {
      name: 'position',
      type: ['String'],
      describe: 'Toast 的位置',
      default: 'middle',
      option: [
        {
          name: 'top',
          describe: '顶部展示'
        },
        {
          name: 'middle',
          describe: '居中展示',
          default: 'false'
        },
        {
          name: 'bottom',
          describe: '底部展示'
        }
      ]
    },
    {
      name: 'duration',
      type: ['Number'],
      describe: '持续时间（毫秒），若为 -1 则不会自动关闭',
      default: '3000',
      option: []
    },
    {
      name: 'iconClass',
      type: ['String'],
      describe: 'icon类名',
      default: '',
      option: []
    }
  ]
}
