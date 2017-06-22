<template>
  <div class="demo-button">
    <h1>popup</h1>
    <Button type="normal" @click="popBottom">向下</Button>
    <Popup 
      v-model="popupBottom"
      position="bottom"
      class="popupBottom"
      >
      我是内容
    </Popup>
    <Button type="normal" @click="popTop">向上</Button>
    <Popup 
      v-model="popupTop"
      position="top"
      class="popupTop"
      modal
      >
      我是内容
    </Popup>
  </div>
</template>
<script>
export default {
  data () {
    return {
      popupBottom: false,
      popupTop: false,
      modal: false
    }
  },
  methods: {
    popTop () {

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
</style>
