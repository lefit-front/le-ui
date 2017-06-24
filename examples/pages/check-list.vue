<template>
  <div>
    <check-list
      class="demo-check-list"
      v-model="value"
      :title="title"
      :options="options"
      :name="'class'"
      @change="handleChangeValue" />
  </div>
</template>
<script>
    export default {
      data () {
        return {
          value: '',
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
          console.log(val)
        }
      }
    }
</script>
