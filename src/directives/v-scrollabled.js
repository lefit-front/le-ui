export default {
  install (Vue) {
    let touchstartHandle = function (data, evt) {
      let target = evt.target
      while (target !== this && target) {
        target = target.parentNode
      }
      if (target) {
        data.elScroll = target
        data.posY = evt.touches[0].pageY
        data.scrollY = target.scrollTop
        data.maxScroll = target.scrollHeight - target.clientHeight
      } else {
        evt.preventDefault()
      }
    }
    let touchmoveHandle = function (data, evt) {
      if (data.maxScroll <= 0) {
        evt.preventDefault()
      }
      let elScroll = data.elScroll
      let scrollTop = elScroll.scrollTop
      let distanceY = evt.touches[0].pageY - data.posY
      if (distanceY > 0 && scrollTop === 0) {
        evt.preventDefault()
      }
      if (distanceY < 0 && (scrollTop + 1 >= data.maxScroll)) {
        evt.preventDefault()
      }
    }
    let touchendHandle = function (data) {
      data.maxScroll = 0
    }
    Vue.directive('scrollabled', {
      bind: function (el, binding, vnode, oldVnode) {
        let data = {
          posY: 0,
          maxScroll: 0
        }
        el.addEventListener('touchstart', touchstartHandle.bind(el, data))
        el.addEventListener('touchmove', touchmoveHandle.bind(el, data))
        el.addEventListener('touchend', touchendHandle.bind(el, data))
      },
      unbind: function (el) {
        el.removeEventListener('touchstart', touchstartHandle)
        el.removeEventListener('touchmove', touchstartHandle)
        el.removeEventListener('touchend', touchendHandle)
      }
    })
  }
}