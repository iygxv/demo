
import Message from './message/index'
const install = function (Vue) {
  if (install.installed) return
  Message.install(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Message
}
