import loading from './loading'
export default {
  install(Vue) {
    let LoadingConstructor = Vue.extend(loading)
    let tpl = new LoadingConstructor({
      el: document.createElement('div')
    })
    console.log('jinlailee')
    document.body.appendChild(tpl)
    tpl.full = true
  }
}
