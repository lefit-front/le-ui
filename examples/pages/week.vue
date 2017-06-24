<template>
  <div>
    <input type="number" placeholder="输入日期" v-model.number="day" />
    <Week class="demo-week" :active="day" :data="data" v-on:select="handleSelectItem"/>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          day: 0,
          data: [
            {
              id: 0,
              name: '今天',
              content: '06.24'
            },
            {
              id: 1,
              name: '周日',
              content: '06.25'
            },
            {
              id: 2,
              name: '周一',
              content: '06.26'
            },
            {
              id: 3,
              name: '周二',
              content: '06.27'
            },
            {
              id: 4,
              name: '周三',
              content: '06.28'
            },
            {
              id: 5,
              name: '周四',
              content: '06.29'
            },
            {
              id: 6,
              name: '周五',
              content: '06.30'
            }
          ]
        }
      },
      methods: {
        handleSelectItem (item, index) {
          console.log(item, index)
        }
      }
    }
</script>
