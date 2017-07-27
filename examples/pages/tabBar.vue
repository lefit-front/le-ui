<template>
  <div class="demo-tab">
    <h1>tabBar</h1>
    <le-tab-bar class="demo-tab-bar" style="margin-bottom:10px" :dataList="data02" select="card" line @change="changeTab"></le-tab-bar>
    <le-tab-bar style="background-color:#f1f1f1; font-size:20px" :dataList="data" select="card" line></le-tab-bar>
    <le-tab-bar class="demo-tab-bar" type="block" :dataList="data03"></le-tab-bar>
    <le-tab-bar class="demo-tab-bar" type="block" :dataList="data04" :sprite="true"></le-tab-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          'id': 'card',
          'name': '会员卡',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png'
        },
        {
          'id': 'pt',
          'name': '私教课',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png'
        },
        {
          'id': 'camp',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png',
          'name': '训练营'
        },
        {
          'id': 'mall',
          'img': 'https://cdn.leoao.com/img/%E8%AF%BE%E7%A8%8B@2x.png',
          'name': '运动装备'
        }
      ],
      data03: [
        {
          'id': 'card',
          'name': '会员卡',
          'slot': '1'
        },
        {
          'id': 'pt',
          'slot': '2',
          'name': '私教课'
        },
        {
          'id': 'camp',
          'slot': '3',
          'name': '训练营'
        },
        {
          'id': 'mall',
          'slot': '4',
          'name': '运动装备'
        }
      ],
      data02: [
        {
          'id': 'card',
          'name': '会员卡'
        },
        {
          'id': 'pt',
          'name': '私教课'
        },
        {
          'id': 'camp',
          'name': '训练营'
        },
        {
          'id': 'mall',
          'name': '运动装备'
        }
      ],
      data04: [
        {
          'id': 'team',
          'name': '团体课',
          'class': 'le-barbell',
          'to': ''
        },
        {
          'id': 'private',
          'name': '私教',
          'class': 'le-order',
          'to': ''
        },
        {
          'id': 'camp',
          'name': '训练营',
          'class': 'le-cup',
          'to': ''
        },
        {
          'id': 'mall',
          'name': '商城',
          'class': 'le-bag',
          'to': ''
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
    changeTab (id) {
      console.log(id)
    }
  }
}
</script>
<style>
.demo-tab-bar .le-tab-bar-name {
  font-size: 15px;
}
/*-----The sprites----*/
.le-athlete,
.le-bag,
.le-barbell,
.le-bicycle,
.le-bottle,
.le-cabinet,
.le-cup,
.le-detection,
.le-explore-b,
.le-explore,
.le-order,
.le-people-b,
.le-people,
.le-stopwatch-b,
.le-stopwatch {
  display: inline-block;
  *zoom: 1;
  vertical-align: middle;
  background: url(https://cdn.leoao.com/m/img/sprite/custom.png) -9999px -9999px no-repeat;
}

.le-athlete {
  width: 66px;
  height: 66px;
  background-position: 0 0;
}

.le-bag {
  width: 60px;
  height: 53px;
  background-position: -76px 0;
}

.le-barbell {
  width: 61px;
  height: 59px;
  background-position: -146px 0;
}

.le-bicycle {
  width: 56px;
  height: 53px;
  background-position: -217px 0;
}

.le-bottle {
  width: 66px;
  height: 66px;
  background-position: -283px 0;
}

.le-cabinet {
  width: 66px;
  height: 66px;
  background-position: -359px 0;
}

.le-cup {
  width: 56px;
  height: 53px;
  background-position: -435px 0;
}

.le-detection {
  width: 66px;
  height: 66px;
  background-position: -501px 0;
}

.le-explore-b {
  width: 43px;
  height: 39px;
  background-position: -577px 0;
}

.le-explore {
  width: 43px;
  height: 39px;
  background-position: -630px 0;
}

.le-order {
  width: 51px;
  height: 58px;
  background-position: 0 -76px;
}

.le-people-b {
  width: 50px;
  height: 50px;
  background-position: -61px -76px;
}

.le-people {
  width: 50px;
  height: 50px;
  background-position: -121px -76px;
}

.le-stopwatch-b {
  width: 38px;
  height: 43px;
  background-position: -181px -76px;
}

.le-stopwatch {
  width: 38px;
  height: 43px;
  background-position: -229px -76px;
}

</style>
