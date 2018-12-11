<template>
  <div class="picker-demo">

    <le-button @click="show1 = true" size="large" style="margin: 20px 0;">打开picker1</le-button>
    <le-picker-new v-model="show1" :datas="[data]" :currentValue="['10']" :modelClickClose="false" @change="change" @select="select" @cancel="cancel" />

    <le-button @click="show2 = true" size="large" style="margin: 20px 0;">打开picker2</le-button>
    <le-picker-new v-model="show2" :datas="[data, data1]" :currentValue="['10', 'string20']" :modelClickClose="false" @change="change" @select="select" @modelClick="modelClick" @cancel="cancel" />

    <le-button @click="show3 = true" size="large" style="margin: 20px 0;">打开picker3</le-button>
    <le-picker-new v-model="show3" :datas="[data, data1, data2]" :currentValue="['10', 'string20', '11']" :modelClickClose="false" @change="change" @select="select" @cancel="cancel" />

    <le-button @click="show4 = true" size="large" style="margin: 20px 0;">打开联动picker</le-button>
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
          disabled: index % 10 === 0 ? true : false,
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