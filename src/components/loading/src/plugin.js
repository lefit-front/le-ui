import loading from './loading'
export default {
  install:(Vue, _option) => {
    let LoadingConstructor = Vue.extend(loading)
    let tpl = new LoadingConstructor({
      el: document.createElement('div')
    })
    tpl.show = false
    let defaultProperties = {
      full: true,
      show: false,
      backgroundColor: 'rgba(255,255,255,.9)',
      loadingColor: '#fa4a11',
      type: 'rotate'
    }
    _option && Object.assign(defaultProperties, _option)
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
        Object.assign(tpl, defaultProperties)
      }
    }
    Object.defineProperty(Vue.prototype, '$loading', {value: methods})
  }
}
