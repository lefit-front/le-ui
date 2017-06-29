<template>
  <div class="demo-card">
    <lemo-store v-for="(item, index) in list" :key="index" :name="item.name" :address="item.address" :img="item.img" :distance="item.distance" @location="clickLocation(item)"/>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          list: [
            {
              name: '磁器口店',
              address: '北京市东城区珠市口东大街2号丰泰中心地下一层（地铁磁器口站出D口，向西100米，毕节酒店对面）',
              img: 'https://img.leoao.com/o_1bav4f5pd1n7116i5115djg9tb59.jpg?imageView2/2/w/550',
              distance: 1121,
              lat: 39.892632,
              lng: 116.415977,
              id: 106
            },
            {
              name: '天山路巴黎春天店',
              address: '长宁区天山路762号巴黎春天603室',
              img: 'https://img.leoao.com/o_1akicv71a16k37e41jbj2g9b0o8.png?imageView2/2/w/550',
              distance: 162,
              lat: 31.211819,
              lng: 121.402336,
              id: 21
            }
          ]
        }
      },
      methods: {
        clickLocation (item) {
          console.log(item.name, item.address, item.lat, item.lng)
        }
      }
    }
</script>
