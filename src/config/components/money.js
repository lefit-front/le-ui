export default {
  file: 'money',
  name: 'Money',
  class: 'le-money',
  describe: 'monen组件',
  props: [
    {
      name: 'number',
      type: ['Number', 'String'],
      describe: '数值大小',
      default: '0',
      option: [],
      required: false
    },
    {
      name: 'size',
      type: ['Number', 'String'],
      describe: '计算数值和icon字体大小',
      default: '12',
      option: [],
      required: false
    },
    {
      name: 'color',
      type: ['String'],
      describe: '数字和icon颜色， 接受 #开头，yellow, rbga() 三种方式',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'moneyIcon',
      type: ['String'],
      describe: '数值icon',
      default: '¥',
      option: [],
      required: false
    },
    {
      name: 'bold',
      type: ['Boolean'],
      describe: '字体加粗，接受 true false',
      default: 'true',
      option: [],
      required: false
    }
  ]
}
