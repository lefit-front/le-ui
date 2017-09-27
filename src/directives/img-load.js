const err = 'https://cdn.leoao.com/img_err_s.png'
const loading = 'https://cdn.leoao.com/logo-placehodel.png'
const placeImgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII='
class LefitImgLoad {
  constructor({scale, fadeIn}) {
    this.scale = scale || 0.4
    this.needFadeIn = fadeIn !== false
    // 这里可以拓展占位图 但是需要考虑比例
    // 可以使用一个json文件定义
  }
  lefitImgLoad (el) {
    el.style.backgroundColor = 'rgba(0,0,0,.03)'
    el.style.backgroundImage = `url(${loading})`
    el.style.backgroundPosition = 'center center'
    el.style.backgroundRepeat = 'no-repeat'
    el.style.backgroundSize = `${189 * this.scale}px ${52 * this.scale}px`
  }
  lefitImgErr (el, scale) {
    el.style.backgroundColor = 'rgba(0,0,0,.03)'
    el.style.backgroundImage = `url(${err})`
    el.style.backgroundPosition = 'center center'
    el.style.backgroundRepeat = 'no-repeat'
    el.style.backgroundSize = `${131 * this.scale}px ${125 * this.scale}px`
  }
  fadeIn(el) {
    if (!this.needFadeIn) {
      el.style.opacity = 1
      return false
    }
    setTimeout(() => {
      let opacity = window.getComputedStyle(el).opacity * 1
      // console.log('0是谁啊')
      // console.log(opacity)
      if (opacity < 0.95) {
        el.style.opacity = (1 - opacity) / 6 + opacity
        this.fadeIn(el, opacity)
      } else {
        el.style.opacity = 1
      }
    }, 1000)
  }
}
export default {
  install(Vue, {scale, fadeIn}) {
    Vue.directive('lefit-load', {
      bind(el, { value }) {
        console.log('进来一次')
        if (value === undefined) return false
        let valType = typeof value === 'string' ? 'string' : 'object'
        let originStyle = ''
        let src = ''
        if (el.nodeName !== 'IMG') {
          originStyle = window.getComputedStyle(el).background
        } else {
          el.src = placeImgSrc
        }
        src = valType === 'string' ? value : value.url
        // 新建一个图片加载对象
        let newImgLoad = new LefitImgLoad({
          value: value.scale || scale,
          fadeIn: typeof value.fadeIn === 'boolean' ? value.fadeIn : fadeIn
        })
        newImgLoad.lefitImgLoad(el)
        let imgTemp = new Image()
        imgTemp.src = src
        imgTemp.addEventListener('load', function () {
          el.style.opacity = 0
          if (el.nodeName === 'IMG') {
            el.src = this.src
          } else {
            el.style.background = originStyle
            el.style.backgroundImage = `url(${this.src})`
          }
          newImgLoad.fadeIn(el)
        })
        imgTemp.addEventListener('error', function () {
          el.alt = `图片src请求失败: ${this.src}`
          newImgLoad.lefitImgErr(el)
        })
      }
    })
  }
}