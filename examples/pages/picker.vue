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
    <Picker :slots="dataList" @change="onValuesChange" title="选择地址" :cancel="cancel" :submit="submit" :show="show"></Picker>
    <Button @click="open">打开picker</Button>
  </div>
</template>
<script>
export default {
  methods: {
    onValuesChange(picker, values) {
      console.log(values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    cancel () {
      this.show = 'none'
    },
    submit (values) {
      this.show = 'none'
      console.log(values)
    },
    open () {
      this.show = 'block'
    }
  },
  data() {
    return {
      show: 'none'
    };
  },
  computed: {
    dataList () {
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
    }
  }
};
</script>
