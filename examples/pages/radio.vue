<template>
  <div class="demo-radio">
    <lemo-radio :options="options" @change="handleSelect"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      value2: [],
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
      this.$emit('getValue', this.curValue)
    }
  }
}
</script>

<style lang="less">
</style>
