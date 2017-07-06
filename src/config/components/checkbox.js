export default {
  file: 'checkbox',
  name: 'Checkbox',
  class: 'leuv-checkbox',
  describe: '多选框组件',
  props: [
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
    }
  ]
}
