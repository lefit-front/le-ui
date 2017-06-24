<template>
  <div>
    <check-list
      class="demo-radio-list"
      v-model="value"
      :title="`${title}单选`"
      :options="options"
      :type="'radio'"
      @getValue="handleChangeValue" />
    <check-list
      class="demo-checkbox-list"
      v-model="value2"
      :title="`${title}多选`"
      :options="options"
      :type="'checkbox'"
      @getValue="handleChangeValue" />
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
              value: '3'
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
        handleChangeValue (val) {
          console.log('demo value is: ' + val)
        }
      }
    }
</script>
<style lang="less">
  .demo-radio-list {
    margin-bottom: 20px;
  }
</style>
