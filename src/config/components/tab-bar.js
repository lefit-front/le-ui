export default {
  file: 'tab-bar',
  name: 'TabBar',
  class: 'le-tab-bar',
  describe: 'tabBar组件',
  props: [
    {
      name: '数据格式',
      type: ['String'],
      describe: '用于渲染tab-bar',
      default: '',
      option: [
        {
          name: '数据格式配置',
          describe: '{id:id值, name: 名称, to: 指向跳转路径, img: 图片路径, slot: 自定义内容 }'
        }
      ],
      required: false
    },
    {
      name: 'select',
      type: ['String'],
      describe: '默认选中tab,在设置line后生效,不设置没有默认选中,接受数据中的id标识',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'line',
      type: ['Boolean'],
      describe: '是否展示line动效',
      default: 'true',
      option: [
        {
          name: 'true',
          describe: 'line可用',
          default: 'true'
        },
        {
          name: 'false',
          describe: 'line不可用'
        }
      ],
      required: false
    },
    {
      name: 'sprite',
      type: ['Boolean'],
      describe: '是否使用雪碧图，数据格式中需要包含class',
      default: 'false',
      option: [
        {
          name: true,
          describe: '使用雪碧图',
          default: false
        },
        {
          name: false,
          describe: '不使用雪碧图',
          default: true
        }
      ],
      required: false
    },
  ]
}
