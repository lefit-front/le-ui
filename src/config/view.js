module.exports = {
  "file": "view",
  "name": "View",
  "class": "lemo-view",
  "describe": "图片容器组件",
  "props": [
    {
      "name": "src",
      "type": ["Array", "String"],
      "describe": "图片的url地址",
      "default": "",
      "option": [],
      "required": true,
      "example": "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg"
    },
    {
      "name": "width",
      "type": ["Number", "String"],
      "describe": "图片的宽度",
      "default": 200,
      "option": [],
      "required": false
    },
    {
      "name": "height",
      "type": ["Number", "String"],
      "describe": "图片的高度",
      "default": 200,
      "option": [],
      "required": false
    },
    {
      "name": "defaultImg",
      "type": ["String"],
      "describe": "图片加载前显示的默认图（url地址）",
      "default": "",
      "option": [],
      "required": false
    },
    {
      "name": "fade",
      "type": ["Boolean"],
      "describe": "是否使用透明度渐变动画",
      "default": false,
      "option": [
        {
          "name": true,
          "describe": "使用图片透明度渐变动画",
          "default": false
        },
        {
          "name": false,
          "describe": "不使用图片透明度渐变动画",
          "default": true
        }
      ],
      "required": false
    },
    {
      "name": "shape",
      "type": ["String"],
      "describe": "图片容器的形状",
      "default": "normal",
      "option": [
        {
          "name": "normal",
          "describe": "容器为正方形",
          "default": true
        },
        {
          "name": "round",
          "describe": "容器为圆形",
          "default": false
        }
      ],
      "required": false
    },
    {
      "name": "cover",
      "type": ["Boolean"],
      "describe": "图片的显示方式：是否铺满容器",
      "default": false,
      "option": [
        {
          "name": true,
          "describe": "容器为正方形",
          "default": false
        },
        {
          "name": false,
          "describe": "容器为圆形",
          "default": true
        }
      ],
      "required": false
    }
  ]
}