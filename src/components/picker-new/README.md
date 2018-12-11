## le-picker组件

### 参数属性

| 属性             | 说明                  | 类型    | 默认值   | 备注 |
|------------------|---------------------|---------|----------|------|
| title            | 选择栏标题            | String  | '请选择' |      |
| value            | 显示隐藏              | Boolean | false    |      |
| modelClickClose  | 是否支持背景点击关闭  | Boolean | true     |      |
| confirmText      | 确认按钮文本          | String  | '确定'   |      |
| cancelText       | 取消按键的文本        | String  | '取消'   |      |
| showKey          | 用于显示的key         | String  | 'label'  |      |
| datas            | 待选项数据            | Array   | [[]]       |      |
| currentValue     | 选中的值              | Array   | []       |      |
| showBar          | 显示顶部bar           | Boolean | true     |      |
| visibleItemCount | 一次展示多少行数据    | Number  | 5        |      |
| itemHeight       | 每行数据的高度，单位px | Number  | 36       |      |

### 事件

| 事件       | 说明             |
|------------|----------------|
| change     | 变化时触发       |
| select     | 点击确认时触发   |
| modelClick | 点击阴影蒙层触发 |
| cancel     | 点击取消触发     |


### 示例数据
```json
// 基本数据
// 纯数组
[
  ['待选1','待选2','待选3','待选4','待选5','待选6'],
  ['待选1','待选2','待选3','待选4','待选5','待选6'],
  ['待选1','待选2','待选3','待选4','待选5','待选6'],
]
// 数组对象
[
  [{
    label: '我是标题1',
    value: 1,
    disabled: false,  // 非必填
  }, {
    label: '我是标题2',
    value: 2,
    disabled: false,  // 非必填
  }, {
    label: '我是标题3',
    value: 3,
    disabled: false,  // 非必填
  }]
]

// 树状联动
[
  [{
    label: '我是标题',
    value: 1,
    disabled: false,  // 非必填
    children: [       // 非必填
      {
        label: '我是chilren标题',
        value: '1-1',
        disabled: false,
        children: [       // 非必填
          {
            label: '我是chilren-children标题',
            value: '1-1-1',
            disabled: true,
          }
        ]
      }
    ]
  }]
]
```


### 实例代码

```html
<template>
  <div class="picker-demo">
    
    <le-button @click="show1 = true" size="large">打开picker1</le-button>
    <le-picker-new v-model="show1" :datas="[data]" :currentValue="['10']" :modelClickClose="false" @change="change" @select="select" @cancel="cancel" />

    <le-button @click="show2 = true" size="large">打开picker2</le-button>
    <le-picker-new v-model="show2" :datas="[data, data1]" :currentValue="['10', 'string20']" :modelClickClose="false" @change="change" @select="select" @modelClick="modelClick" @cancel="cancel" />

    <le-button @click="show3 = true" size="large">打开picker3</le-button>
    <le-picker-new v-model="show3" :datas="[data, data1, data2]" :currentValue="['10', 'string20', '11']" :modelClickClose="false" @change="change" @select="select" @cancel="cancel" />

    <le-button @click="show4 = true" size="large">打开联动picker</le-button>
    <le-picker-new v-model="show4" :datas="[data3]" :currentValue="['10', '10-2', '10-2-3']" :modelClickClose="false" @change="change" @select="select" @modelClick="modelClick" @cancel="cancel" />

  </div>
</template>

<script>
export default{
  data(){
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    }
  },
  methods: {
    change (e) {
      console.log('change', e)
    },
    select (e) {
      console.log('select', e)  
    },
    modelClick (e) {
      console.log('modelClick', e)  
    },
    cancel (e) {
      console.log('cancel', e)  
    },
  },
  computed: {
    // 模拟数据 多维数组
    data(){
      let result = [];
      for (let index = 0; index < 100; index++) {
        result.push({
          value: index,
          label: `testData${index}`
        });
      }
      return result;
    },
    data1(){
      let result = [];
      for (let index = 0; index < 100; index++) {
        result.push(`string${index}`);
      }
      return result;
    },
    data2(){
      let result = [];
      for (let index = 0; index < 100; index++) {
        result.push({
          value: index,
          label: `<div style="color: ${
            index % 2 === 0 ? '#ff6040' : '#33cc7f'
          }">name${index}</div>`
        });
      }
      return result;
    },
    // 模拟数据  树状联动
    data3(){
      let result = [];
      for (let index = 0; index < 30; index++) {
        let children = [];
        for (let j = 0; j < 20; j++) {
          let children1 = [];
          for (let k = 0; k < 10; k++) {
            children1.push({
              value: `${index}-${j}-${k}`,
              label: `${index}-${j}-${k}`
            });
          }
          children.push({
            value: `${index}-${j}`,
            label: `${index}-${j}`,
            children: children1
          });
        }
        result.push({
          value: index,
          label: `<div style="color: ${
            index % 2 === 0 ? '#ff6040' : '#33cc7f'
          }">name${index}</div>`,
          children: children
        });
      }
      return result;
    }
  }
}
</script>
```