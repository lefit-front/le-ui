<template>
  <div class="demo-checkbox">
    <le-checkbox value="value" label="哈哈哈" :checked="checked" @input="getValue" />
    <le-checkbox-group :options="options" @change="handleSelect" :value="value"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ['2', '4'],
      checked: false,
      title: '课程',
      options: [
        {
          label: "瑜伽",
          value: '1'
        },
        {
          label: "踏板",
          value: '2'
        },
        {
          label: "舞蹈",
          value: '3',
          disabled: true
        },
        {
          label: "杠铃",
          value: '4'
        },
        {
          label: "搏击",
          value: '5'
        },
        {
          label: "单车",
          value: '6'
        }
      ]
    }
  },
  methods: {
    handleSelect (val) {
      this.curValue = val
    },
    getValue (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less">
</style>
