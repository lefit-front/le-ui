const err = 'https://cdn.leoao.com/img_err_s.png'
const loading = 'https://cdn.leoao.com/logo-placehodel.png'
const placeImgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII='
let originStyle = ''
let pluginObj = {
  options: {
    scale: 0.4
  },
  lefitImgLoad (el, scale) {
    el.style.backgroundColor = 'rgba(0,0,0,.03)'
    el.style.backgroundImage = `url(${loading})`
    el.style.backgroundPosition = 'center center'
    el.style.backgroundRepeat = 'no-repeat'
    el.style.backgroundSize = `${189 * (scale ? scale : this.options.scale)}px ${52 * (scale ? scale : this.options.scale)}px`
  },
  lefitImgErr (el, scale) {
    el.style.backgroundColor = 'rgba(0,0,0,.03)'
    el.style.backgroundImage = `url(${err})`
    el.style.backgroundPosition = 'center center'
    el.style.backgroundRepeat = 'no-repeat'
    el.style.backgroundSize = `${131 * (scale ? scale : this.options.scale)}px ${125 * (scale ? scale : this.options.scale)}px`
  }
}
export default {
  install (Vue, scale = 0.4) {
    pluginObj.options.scale = scale
    Vue.directive('lefit-load', function (el, binding) {
      if (binding.value === undefined) {
        return false
      }
      let valType = typeof binding.value === 'string' ? 'string' : 'object'
      let originStyle = ''
      let src = ''
      if (el.nodeName !== 'IMG') {
        originStyle = getComputedStyle(el).background
      } else {
        el.src = placeImgSrc
      }
      src = valType === 'string' ? binding.value : binding.value.url
      pluginObj.lefitImgLoad(el, valType === 'object' ? binding.value.scale : undefined)
      if (src) {
        let img = new Image()
        img.src = src
        img.onload = function () {
          if (el.nodeName === 'IMG') {
            el.src = this.src
          } else {
            el.style.background = originStyle
            el.style.backgroundImage = `url(${this.src})`
          }
          return
        }
        img.onerror = function () {
          el.alt = `图片src请求失败: ${this.src}`
          pluginObj.lefitImgErr(el, valType === 'object' ? binding.value.scale : undefined)
        }
      }
    })
  }
}