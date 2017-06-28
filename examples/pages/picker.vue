<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
body{
  margin:0;
}
</style>
<template>
  <div class="demo-button">
    <h1>picker</h1>
    <Picker :slots="dataList02" @change="onValuesChange" title="选择地址" :cancel="cancel" :submit="submit" :show="show"></Picker>
    <Button @click="open">打开picker</Button>
    <Picker :slots="dataList" @change="onAddressChangeThree" title="选择地址" :cancel="cancelThree" :submit="submitThree" :show="showThree" :visible-item-count="5"></Picker>
    <Button @click="openThree">打开三级联动</Button>
  </div>
</template>
<script>
import regionData from '../region.js'
export default {
  data() {
    return {
      show: 'none',
      showThree: 'none',
      regionDataList: '',
      provinceId: '',
      cityId: '',
      initPD: '',
      initCD: '',
      initXD: ''
    };
  },
  created () {
    this.initPD = this.initP()
    this.initCD = this.initC()
    this.initXD = this.initX()
  },
  methods: {
    onValuesChange(picker, values) {
      console.log(values)
    },
    onAddressChangeThree (picker, values) {
      console.log(values)
      /* 存放城市和地区  */
      let city = {}
      let county = {}
      /* 获取省份value */
      regionData.forEach((data, index) => {
        if (data.name === values[0] && parseInt(data.parent, 10) === 0) {
          this.provinceId = data.value
          return
        }
      })
      /* 获取省份下城市 */
      regionData.forEach((data, index) => {
        if (parseInt(data.parent, 10) === parseInt(this.provinceId, 10)) {
          city[data.name] = []
        }
      })
      /* 获取城市下的地区 */
      regionData.forEach((data, index) => {
        if (data.name === values[1]) {
          this.cityId = data.value
          return
        }
      })
      regionData.forEach((data, index) => {
        if (parseInt(data.parent, 10) === parseInt(this.cityId, 10)) {
          county[data.name] = []
        }
      })
      /* 设置城市和区域实现联动 */
      picker.setSlotValues(1, Object.keys(city))
      picker.setSlotValues(2, Object.keys(county))
    },
    cancelThree () {
      this.showThree = 'none'
    },
    submitThree (values) {
      console.log(values)
      this.showThree = 'none'
    },
    cancel () {
      this.show = 'none'
    },
    submit (values) {
      console.log(values)
      this.show = 'none'
    },
    open () {
      this.show = 'block'
    },
    openThree () {
      this.showThree = 'block'
    },
    initP () {
      let sort = {}
      regionData.map((data, index) => {
        if (parseInt(data.parent, 10) === 0) {
          sort[data.name] = []
        }
      })
      return sort
    },
    initC () {
      let sort = {}
      regionData.map((data, index) => {
        if (parseInt(data.parent, 10) === 1) {
          sort[data.name] = []
          return
        }
      })
      return sort
    },
    initX () {
      let sort = {}
      regionData.map((data, index) => {
        if (parseInt(data.parent, 10) === 2) {
          sort[data.name] = []
          return
        }
      })
      return sort
    }
  },
  computed: {
    allData () {
      let data = regionData
      return data
    },
    dataList02 () {
      let slots = [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
      return slots
    },
    dataList () {
      let slots = [
        {
          flex: 1,
          values: Object.keys(this.initPD),
          className: 'slot-province',
          textAlign: 'center'
        }, {
          divider: true,
          content: '',
          className: 'slot-space'
        }, {
          flex: 1,
          values: Object.keys(this.initCD),
          className: 'slot-city',
          textAlign: 'center'
        }, {
          divider: true,
          content: '',
          className: 'slot-space'
        }, {
          flex: 1,
          values: Object.keys(this.initXD),
          className: 'slot-county',
          textAlign: 'center'
        }
      ]
      return slots
    }
  }
};
</script>
