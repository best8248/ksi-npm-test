import Alert from './alert/alert.vue'

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
