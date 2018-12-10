<template>
  <div class="picker-demo">
    <le-button @click="show = true" size="large">打开picker</le-button>
    <le-picker-new v-model="show" :datas="datas" :currentValue="['10', '10-2', '10-2-3']" :modelClickClose="false"></le-picker-new>
  </div>
</template>

<script>
import { data, data1, data2, data3 } from '../../src/components/picker-new/data.js'
export default{
  data(){
    return {
      // datas: [data, data1, data2, '-'],
      datas: [data3],
      show: true
    }
  }
}
</script>