import Radio from './radio';
import Checkbox from './checkbox';

export default {
  file: 'check-list',
  name: 'CheckList',
  class: 'le-check-list',
  describe: '选择器列表组件',
  props: [
    {
      name: 'title',
      type: ['String'],
      describe: '选择器标题',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'options',
      type: ['Array'],
      describe: '选择项',
      default: '',
      option: [],
      required: true,
      example: [
        {
          label: '瑜伽',
          value: '1'
        },
        {
          label: '踏板',
          value: '2'
        },
        {
          label: '舞蹈',
          value: '3',
          disabled: true
        },
        {
          label: '杠铃',
          value: '4'
        },
        {
          label: '搏击',
          value: '5'
        },
        {
          label: '单车',
          value: '6'
        }
      ]
    },
    {
      name: 'value',
      type:['String', 'Array'],
      describe: '选择的值',
      default: '',
      option: [],
      required: false
    },
    {
      name: 'type',
      type: ['String'],
      describe: '选择器类型',
      default: 'radio',
      option: [
        {
          name: 'radio',
          describe: '单选框',
          default: true
        },
        {
          name: 'checkbox',
          describe: '多选框',
          default: false
        }
      ],
      required: false
    }
  ],
  dep: [
    Radio,
    Checkbox
  ]
}
