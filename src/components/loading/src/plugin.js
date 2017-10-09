import loading from './loading'
export default {
  install:(Vue) => {
    let LoadingConstructor = Vue.extend(loading)
    let tpl = new LoadingConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(tpl.$el)
    let methods = {
      show(option) {
        this._reset()
        option && Object.assign(tpl, option)
        tpl.show = true
      },
      close() {
        tpl.show = false
      },
      _reset() {
        tpl.full = true
        tpl.show = false
        tpl.backgroundColor = 'rgba(255,255,255,.9)'
        tpl.loadingColor = '#fa4a11'
      }
    }
    Object.defineProperty(Vue.prototype, '$loading', {value: methods})
  }
}
