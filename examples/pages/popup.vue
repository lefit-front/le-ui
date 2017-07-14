<template>
  <div class="demo-button">
    <h1>popup</h1>
    <le-button type="primary" @click="popBottom">向下</le-button>
    <le-popup
      v-model="popupBottom"
      position="bottom"
      class="popupBottom"
      >
      我是内容
    </le-popup>
    <le-button type="primary" @click="popTop">向上</le-button>
    <le-popup
      v-model="popupTop"
      position="top"
      class="popupTop"
      modal
      >
      我是内容
    </le-popup>
    <le-button type="primary" @click="popCenter">中间</le-button>
    <le-popup
      v-model="popupCenter"
      position=""
      class="popupCenter"
      pop-transition="popup-fade"
      >
      我是内容
    </le-popup>
    <le-button type="primary" @click="popRight">向右边</le-button>
    <le-popup
      v-model="popupRight"
      position="right"
      class="popupRight"
      modal
      >
      <div class="msg">我是内容</div>
    </le-popup>
    <le-button type="primary" @click="popLeft">向左边</le-button>
    <le-popup
      v-model="popupLeft"
      position="left"
      class="popupLeft"
      modal
      >
      <div class="msg">我是内容</div>
    </le-popup>
  </div>
</template>
<script>
export default {
  data () {
    return {
      popupBottom: false,
      popupTop: false,
      modal: false,
      popupCenter: false,
      popupRight: false,
      popupLeft: false
    }
  },
  methods: {
    popLeft () {
      this.popupLeft = true
      setTimeout(() => {
        this.popupLeft = false
      },1000)
    },
    popRight () {
      this.popupRight = true
      setTimeout(() => {
        this.popupRight = false
      },1000)
    },
    popCenter () {
      this.popupCenter = true
    },
    popBottom () {
      this.popupBottom = true
    },
    popTop () {
      this.popupTop = true
      setTimeout(() => {
        this.popupTop = false
      },1000)
    }
  },
  mounted: function() {

  },
}
</script>
<style>
.demo-button {

}
.demo-button button{
  margin-top:10px;
}
.popupBottom{
  height:200px;
  width:100%;
  line-height:200px;
  text-align:center;
}
.popupTop{
  width:100%;
  height:100px;
  line-height:100px;
  text-align:center;
  background: rgba(0, 0, 0, 0.5)!important;
  color:#fff;
}
.popupCenter{
  width:100%;
  height:100px;
  height:100px;
  line-height:100px;
  text-align:center;
}
.popupRight{
  text-align:center;
  color:#fff;
  width:100%;
  height:100vh;
  background: rgba(0, 0, 0, 0.5)!important;
}
.popupLeft{
  text-align:center;
  color:#fff;
  width:100%;
  height:100vh;
  background: rgba(0, 0, 0, 0.5)!important;
}
.msg{
  margin-top:30%;
}
</style>
