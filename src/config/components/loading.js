export default {
  file: 'loading',
  name: 'Loading',
  class: 'le-loading',
  describe: 'loading组件',
  props: [
    {
      name: 'type',
      type: ['String'],
      describe: 'loadig 类型 。接受 rotate triple',
      default: 'rotate',
      option: [
        {
          name: 'rotate',
          describe: 'rotate动效',
          default: false
        },
        {
          name: 'triple',
          describe: 'triple动效',
          default: false
        },
      ],
      required: false
    },
    {
      name: 'loadingColor',
      type: ['String'],
      describe: 'loading颜色',
      default: '#000',
      option: [],
      required: false
    },
    {
      name: 'loadingSize',
      type: ['Number'],
      describe: 'loading大小',
      default: '22',
      option: [],
      required: false
    },
    {
      name: 'full',
      type: ['Boolean'],
      describe: '是否全屏，接受 true, false',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'backgroundColor',
      type: ['String'],
      describe: 'loading的背景颜色',
      default: '无',
      option: [],
      required: false
    },
  ]
}
