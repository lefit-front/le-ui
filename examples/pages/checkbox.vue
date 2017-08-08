<template>
  <div class="demo-checkbox">
    <p>水平</p>
    <le-checkbox value="value" label="哈哈哈" :checked="checked" @input="getValue" />
    <le-checkbox-group :options="options" @change="handleSelect" :value="value"/>
    <p>垂直</p>
    <le-checkbox value="value" label="哈哈哈" :checked="checked2" @input="getValue2" vertical />
    <le-checkbox-group :options="options2" @change="handleSelect" :value="value2" vertical />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ['2', '4'],
      value2: ['2', '4'],
      checked: false,
      checked2: false,
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
      ],
      options2: [
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
        }
      ]
    }
  },
  methods: {
    handleSelect (val) {
      console.log('change:' + val)
    },
    getValue (val) {
      console.log(val)
    },
    getValue2 (val) {
      this.checked2 = !this.checked2
    }
  }
}
</script>

<style lang="less">
</style>
