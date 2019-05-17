import Alert from './alert.vue'

Alert.install = function (Vue) {
  Vue.component('alert', Alert)
}

export default Alert
