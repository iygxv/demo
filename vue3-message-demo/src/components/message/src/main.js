import { createApp } from 'vue'
import Message from './main.vue'

let instance = null
let instances = []
let seed = 1
let ZIndex = 2000
// 创建挂载实例
let createMount = (options) => {
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  const app = createApp(Message, {
    ...options,
    visible: true,
    ZIndex: ZIndex++,
    remove() {
      app.unmount(mountNode)
      document.body.removeChild(mountNode)
    },
  })
  app.mount(mountNode)
  return app
}
let createMessage = (options = {}) => {
  options.id = 'message_' + seed++
  let top = options.top || 40
  instances.forEach(v => {
    // bug  无法获取到 dom，待处理
    // offset += v.el?.offsetHeight + 16
    top += 52 + 16
  })
  options.top = top
  options.onClose = function(id) {
    let len = instances.length;
    let index = -1;
    let removedHeight;
    for (let i = 0; i < len; i++) {
      if (id === instances[i]._props.id) {
        removedHeight = 52;
        index = i;
        instances.splice(i, 1);
        break;
      }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1) return;
    for (let i = index; i < len - 1 ; i++) {
      // bug  无法获取到 dom，待处理
      // 其他实例的top值减去当前实例的高度
      let dom = instances[i].el;
      // 其他实例的top值减去当前实例的高度
      dom && (dom.style['top'] = parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px');
    }
  }
  instance = createMount(options)
  instances.push(instance)
  return instance 
}



/* istanbul ignore next */
Message.install = function (Vue) {
  Vue.component(Message.name, Message)
  Vue.config.globalProperties.$message = createMessage
}

export default Message
