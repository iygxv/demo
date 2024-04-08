import Vue from 'vue';
import Main from './main.vue';

// const PopupManager = {
//   nextZIndex: () => {
//     return PopupManager.zIndex++;
//   }
// }
// let zIndex = 0;
// Object.defineProperty(PopupManager, 'zIndex', {
//   configurable: true,
//   get() {
//     zIndex = zIndex || 2000;
//     return zIndex;
//   },
//   set(value) {
//     zIndex = value;
//   }
// });

// Vue.extend 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
let MessageConstructor = Vue.extend(Main);

let instance = null;
let instances = [];
let seed = 1;
let zIndex = 2000;


const createMessage = function (options) {
  options = options || {};
  let id = 'message_' + seed++; // 唯一标识
  instance = new MessageConstructor({
    data: options
  });
  instance.onClone = function(id) {
    let len = instances.length;
    let index = -1;
    let removedHeight;
    for (let i = 0; i < len; i++) {
      if (id === instances[i].id) {
        removedHeight = instances[i].$el.offsetHeight;
        index = i;
        instances.splice(i, 1);
        break;
      }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1) return;
    for (let i = index; i < len - 1 ; i++) {
      let dom = instances[i].$el;
      // 其他实例的top值减去当前实例的高度
      dom.style['top'] =
        parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
    }
  };
  instance.id = id;
  // 在实例挂载之后，元素可以用 vm.$el 访问。
  instance.$mount();
  document.body.appendChild(instance.$el);
  let top = options.offset || 40;
  instances.forEach(item => {
    top += item.$el.offsetHeight + 16;
  });
  instance.top = top;
  instance.visible = true;
  instance.$el.style.zIndex = zIndex++;
  instances.push(instance);
  return instance;
};


Main.install = function (Vue) {
  Vue.component(Main.name, Main)
  Vue.prototype.$message = createMessage
}

export default Main;