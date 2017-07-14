export default {
  file: 'nav-bar',
  name: 'NavBar',
  class: 'le-nav-bar',
  describe: '导航组件',
  props: [
    {
      name: '数据格式',
      type: ['String'],
      describe: '用于渲染nav-bar',
      default: '',
      option: [
        {
          name: '数据格式配置',
          describe: '{id:id值, name: 展示内容, to: 指向跳转路径 }'
        }
      ],
      required: false
    },
    {
      name: 'height',
      type: ['Number'],
      describe: 'nav-bar高度',
      default: '45px',
      option: [],
      required: false
    },
    {
      name: 'select',
      type: ['String'],
      describe: '默认选中nav,不设置没有默认选中,接受数据中的id标识',
      default: '',
      option: [],
      required: false
    },
  ]
}
