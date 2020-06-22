import * as numberFilters from './number/index'
import * as stringFilters from './string/index'

var tnpFilters = {
  install: function(Vue, options) {
    Object.keys(stringFilters).forEach(key => {
      Vue.filter(key, stringFilters[key])
    })

    Object.keys(numberFilters).forEach(key => {
      Vue.filter(key, numberFilters[key])
    })
  }
}

export default tnpFilters;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(tnpFilters);
  window.tnpFilters = tnpFilters;
}