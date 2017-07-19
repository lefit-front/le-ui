<template>
  <div class="demo-card">
    <le-card v-for="(item, index) in list" :key="index" :title="item.title" :content="item.content" :img="item.img"></le-card>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          list: [
            {
              title: 'Peter',
              content: '擅长:单车，power。↵获得证书：Fitness Rider认证单车教练，BH摇摆单车认证教练，Radical power，Radical kimax   Radical topride，中华健身协会C级健身指导员，   急救照顾协会急救员证。',
              img: 'https://img.leoao.com/o_1bj4h0kko3p6173lrhqv32afuk.jpeg?imageView2/2/w/150'
            },
            {
              title: 'Kasing',
              content: '国家健身指导员，团体操教练。擅长操课：Bodycombat，Cxword。证书：国家健身指导员证，AFCC团操全能证。',
              img: 'https://img.leoao.com/o_1bhe85gb51q6l1c0s1ktjrj930k.jpg?imageView2/2/w/150'
            },
            {
              title: 'Sofie',
              content: '擅长：瑜伽、腰腹、翘臀。获得证书:国家职业资格健身教练；红十字会急救 瑜伽高级教练',
              img: 'https://img.leoao.com/o_1bheplehc1de3b1k1e4g8g21qg5k.jpg?imageView2/2/w/150'
            }
          ]
        }
      }
    }
</script>
