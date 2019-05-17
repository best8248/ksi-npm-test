import MessageDiv from './MessageDiv.vue'

MessageDiv.install = function (Vue) {
  //MessageDiv .vue 파일의 name 활용
  Vue.component(MessageDiv.name, MessageDiv)
}

export default MessageDiv