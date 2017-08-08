export default {
  file: 'checkbox',
  name: 'Checkbox',
  class: 'le-checkbox',
  describe: '多选框组件',
  props: [
    {
      name: 'checked',
      type: ['Boolean', 'Number'],
      describe: '是否选中，若传入则组件为受控组件，由该属性控制',
      default: '0',
      option: [],
      required: false
    },
    {
      name: 'value',
      type: ['String', 'Number'],
      describe: '传入的value值，用于返回给用户',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'label',
      type: ['String', 'Number'],
      describe: '显示的文案，与slot二选一',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'vertical',
      type: ['Boolean'],
      describe: '组件模型为块状排列还是按行排列',
      default: false,
      option: [],
      required: false
    },
    {
      name: 'disabled',
      type: ['Boolean'],
      describe: 'checkbox是否不可用',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'group',
      type: ['Boolean'],
      describe: '是否有多个group',
      default: '',
      option: [],
      required: false
    }
  ],
  slot: [
    {
      name: '',
      describe: '主体位置的内容'
    }
  ]
}
