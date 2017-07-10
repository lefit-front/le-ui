export default {
  file: 'picker',
  name: 'Picker',
  class: 'leuv-picker',
  describe: '选择组件',
  props: [
    {
      name: 'slots',
      type: ['Array'],
      describe: '	slot 对象数组',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'valueKey',
      type: ['String'],
      describe: '当 values 为对象数组时，作为文本显示在 Picker 中的对应字段的字段名',
      default: 'false',
      option: [],
      required: false
    },
    {
      name: 'showToolbar',
      type: ['Boolean'],
      describe: '是否在组件顶部显示一个 toolbar，内容自定义',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'visibleItemCount',
      type: ['Number'],
      describe: 'slot 中可见备选值的个数',
      default: '5',
      option: [],
      required: false
    },
    {
      name: 'itemHeight',
      type: ['Number'],
      describe: 'slot 中可见备选值的个数',
      default: '36',
      option: [],
      required: false
    },
    {
      name: '数据格式',
      type: ['Object'],
      describe: 'picker数据配置格式',
      default: '',
      option: [
        {
          name: '数据格式',
          describe: '[\
        {\
          flex: 1,\
          values: [\'2015-01\', \'2015-02\', \'2015-03\', \'2015-04\', \'2015-05\', \'2015-06\'],\
          className: \'slot1\',\
          textAlign: \'right\'\
        }, {\
          divider: true,\
          content: \'-\',\
          className: \'slot2\'\
        }, {\
          flex: 1,\
          values: [\'2015-01\', \'2015-02\', \'2015-03\', \'2015-04\', \'2015-05\', \'2015-06\'],\
          className: \'slot3\',\
          textAlign: \'left\'\
        }\
      ]',
          default: false
        },
        {
          name: 'divider',
          describe: '对应 slot 是否为分隔符',
          default: false
        },
        {
          name: 'content',
          describe: '分隔符 slot 的显示文本',
          default: false
        },
        {
          name: 'values',
          describe: '对应 slot 的备选值数组。若为对象数组，则需在 picker 标签上设置 value-key 属性来指定显示的字段名',
          default: false
        },
        {
          name: 'defaultIndex',
          describe: '对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0',
          default: false
        },
        {
          name: 'textAlign',
          describe: '对应 slot 的对齐方式',
          default: false
        },
        {
          name: 'flex',
          describe: '对应 slot CSS 的 flex 值',
          default: false
        },
        {
          name: 'className',
          describe: '对应 slot 的类名',
          default: false
        },
      ],
      required: false
    },
    {
      name: 'change(picker, values)',
      type: ['Function'],
      describe: '联动change事件,返回picker对象和values',
      default: '',
      option: [
        {
          name: 'getSlotValue(index)',
          describe: '获取给定 slot 目前被选中的值',
          default: false
        },
        {
          name: 'setSlotValue(index, value)',
          describe: '设定给定 slot 被选中的值，该值必须存在于该 slot 的备选值数组中',
          default: false
        },
        {
          name: 'getSlotValues(index)',
          describe: '获取给定 slot 的备选值数组',
          default: false
        },
        {
          name: 'setSlotValues(index, values)',
          describe: '设定给定 slot 的备选值数组',
          default: false
        },
        {
          name: 'getValues()',
          describe: '获取所有 slot 目前被选中的值（分隔符 slot 除外）',
          default: false
        },
        {
          name: 'setValues(values)',
          describe: '设定所有 slot 被选中的值（分隔符 slot 除外），该值必须存在于对应 slot 的备选值数组中',
          default: false
        },
      ],
      required: false
    },
    {
      name: 'title',
      type: ['String'],
      describe: '设置title',
      default: '选择',
      option: [],
      required: false
    },
    {
      name: 'cancel',
      type: ['Function'],
      describe: '取消按钮事件',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'submit',
      type: ['Function'],
      describe: '确定按钮事件,返回选中values值',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'show',
      type: ['String'],
      describe: '控制组件显示和消失，并且添加了动效，接受block,none',
      default: '',
      option: [],
      required: false
    }
  ]
}
