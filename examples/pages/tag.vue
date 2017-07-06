<template>
  <div>
    <leuv-tag class="demo-tag" :data="tags" />
  </div>
</template>
<script>
    export default {
      data () {
        return {
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
      }
    }
</script>
