export default {
  file: 'progress',
  name: 'Progress',
  class: 'le-progress',
  describe: '进度条组件',
  props: [
    {
      name: 'percentage',
      type: ['Number', 'String'],
      describe: '进度百分比',
      default: '',
      option: [],
      required: true,
      example: 50
    },
    {
      name: 'height',
      type: ['Number', 'String'],
      describe: '进度条高度',
      default: 5,
      option: [],
      required: false
    },
    {
      name: 'color',
      type: ['String'],
      describe: '进度条颜色',
      default: '#ffad26',
      option: [],
      required: false
    },
    {
      name: 'endColor',
      type: ['String'],
      describe: '结束颜色，设置此参数进度条会变成渐变色',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'animation',
      type: ['Boolean'],
      describe: '带缓动动画的进度条',
      default: false,
      option: [
        {
          name: true,
          describe: '不带缓动动画',
          default: false
        },
        {
          name: false,
          describe: '带缓动动画',
          default: true
        }
      ],
      required: false
    }
  ]
}
