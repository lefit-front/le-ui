export default {
  'file': 'message-box',
  'name': 'MessageBox',
  'class': 'lemo-message-box',
  'describe': '图片容器组件',
  'props': [
    {
      'name': 'title',
      'type': ['String'],
      'describe': '提示框的标题',
      'default': '',
      'option': [],
      'required': false
    },
    {
      'name': 'message',
      'type': ['String'],
      'describe': '提示框的内容',
      'default': '',
      'option': [],
      'required': false
    },
    {
      'name': 'showConfirmButton',
      'type': ['Boolean'],
      'describe': '是否显示确认按钮',
      'default': true,
      'option': [
        {
          'name': true,
          'describe': '显示确认按钮',
          'default': true
        },
        {
          'name': false,
          'describe': '不显示确认按钮',
          'default': false
        }
      ],
      'required': false
    },
    {
      'name': 'showCancelButton',
      'type': ['Boolean'],
      'describe': '是否显示取消按钮',
      'default': false,
      'option': [
        {
          'name': true,
          'describe': '显示取消按钮',
          'default': false
        },
        {
          'name': false,
          'describe': '不显示取消按钮',
          'default': true
        }
      ],
      'required': false
    },
    {
      'name': 'confirmButtonText',
      'type': ['String'],
      'describe': '确认按钮的文本',
      'default': '',
      'option': [],
      'required': false
    },
    {
      'name': 'confirmButtonHighlight',
      'type': ['Boolean'],
      'describe': '是否将确认按钮的文本加粗显示',
      'default': false,
      'option': [
        {
          'name': true,
          'describe': '确认按钮的文本加粗显示',
          'default': false
        },
        {
          'name': false,
          'describe': '确认按钮的文本不加粗显示',
          'default': true
        }
      ],
      'required': false
    },
    {
      'name': 'confirmButtonClass',
      'type': ['String'],
      'describe': '确认按钮的类名',
      'default': '',
      'option': [],
      'required': false
    },
    {
      'name': 'cancelButtonText',
      'type': ['String'],
      'describe': '取消按钮的文本',
      'default': '',
      'option': [],
      'required': false
    },
    {
      'name': 'cancelButtonHighlight',
      'type': ['Boolean'],
      'describe': '是否将取消按钮的文本加粗显示',
      'default': false,
      'option': [
        {
          'name': true,
          'describe': '取消按钮的文本加粗显示',
          'default': false
        },
        {
          'name': false,
          'describe': '取消按钮的文本不加粗显示',
          'default': true
        }
      ],
      'required': false
    },
    {
      'name': 'cancelButtonClass',
      'type': ['String'],
      'describe': '取消按钮的类名',
      'default': '',
      'option': [],
      'required': false
    },
    {
      'name': 'closeOnClickModal',
      'type': ['Boolean'],
      'describe': '是否在点击遮罩时关闭提示框',
      'default': true,
      'option': [
        {
          'name': true,
          'describe': '点击遮罩时关闭提示框',
          'default': true
        },
        {
          'name': false,
          'describe': '点击遮罩时不关闭提示框',
          'default': false
        }
      ],
      'required': false
    },
    {
      'name': 'showInput',
      'type': ['Boolean'],
      'describe': '是否显示一个输入框',
      'default': false,
      'option': [
        {
          'name': true,
          'describe': '显示一个输入框',
          'default': false
        },
        {
          'name': false,
          'describe': '不显示输入框',
          'default': true
        }
      ],
      'required': false
    },
    {
      'name': 'inputType',
      'type': ['String'],
      'describe': '输入框的类型',
      'default': 'text',
      'option': [],
      'required': false
    },
    {
      'name': 'inputValue',
      'type': ['String'],
      'describe': '输入框的值',
      'default': '',
      'option': [],
      'required': false
    },
    {
      'name': 'inputPlaceholder',
      'type': ['String'],
      'describe': '输入框的占位符',
      'default': '',
      'option': [],
      'required': false
    }
  ]
}
