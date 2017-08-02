<template>
  <div>
    <le-tag class="demo-tag" :data="tags" :value="value" @select="handleSelect"/>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          value: [2, 4],
          tags: [
            {
              name: '200-300KCal'
            },
            {
              name: '塑形',
              amount: 351
            },
            {
              name: '中等难度',
              amount: 337
            },
            {
              name: '腰腹'
            },
            {
              name: '控制力'
            }
          ]
        }
      },
      methods: {
        handleSelect (val) {
          console.log(val)
        }
      }
    }
</script>
