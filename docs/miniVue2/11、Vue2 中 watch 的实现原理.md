上一章说了 computed 的实现原理，computed 的实现原理比较复杂一些。主要就是让 computed 依赖的数据去收集对应的计算属性 watcher 和 渲染 watcher，另外还有个缓存机制。相比而言 watch 的实现原理就简单很多了，其实就是让依赖数据收集 watcher 的watcher，然后在依赖数据发生变化的时候执行 watcher 的更新回调，侦听器 wacther 的更新回调其实就是用户自定义的 watch 中属性对应的方法。也就是数据发生变化后，重新执行一次用户自定义的方法。

文章内的源码并非真实源码，均为作者手写。源码项目地址：[Nwu23787/mini-Vue2: 手写 Vue2 核心源码 (github.com)](https://github.com/Nwu23787/mini-Vue2)，源码中写的注释很多！

## 1. 初始化 watch

我们来看看 vue 中是如何初始化我们的 watch 选项的：

```js
/**
 * 初始化 watch 选项
 * @param {*} vm Vue实例
 */
function initWatch(vm) {
    let watch = vm.$options.watch

    // 取出 watch 中的每一个属性
    for (let key in watch) {
        const handler = watch[key] // 可能是数组、字符串、函数
        if (Array.isArray(handler)) {
            //如果是数组，则循环创建 watcher
            for (let i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i])
            }
        } else {
            createWatcher(vm, key, handler)
        }
    }
}

/**
 * 
 * @param {*} vm Vue 实例
 * @param {*} key 监听的属性
 * @param {*} handler 属性变化执行的回调
 * @returns 
 */
function createWatcher(vm, key, handler) {
    // 可能是字符串、函数
    if (typeof handler == 'string') {
        handler = vm[handler]
    }

    return vm.$watch(key, handler)
}
```

可以看到，对应 watch 选项的初始化，其实就是将 watch 中指定的依赖数据遍历一遍，为每一个依赖创建一个 watcher。如果依赖数据发生变化，要执行多个回调，则会创建多个 wacther。

## 2. 创建侦听器的 watcher

首先我们要知道，侦听器 watcher 和其他 watcher 的不同点在哪。最大的不同点就是在于侦听器watcher 的更新回调：其他 watcher 的更新回调都是 Vue 帮我们创建好的，用户不用手动指定也无法手动指定回调（比如 computed 的回调是修改 dirty 值，渲染 watcher 的回调是重新渲染视图）。而侦听器 watcher 的更新回调却是用户自定义的方法，也就是用户定义好的，依赖发生变化后应该执行什么操作。

所以，侦听器 watcher 其实就是一种用户自定义的 watcher！他的依赖和更新回调都是我们在创建 watcher 时定义好的。

创建侦听器 watcher 的方法：

```js
/**
 * $watch API
 * @param {string | function} exprOrFn 字符串或者函数
 * @param {Function} cb watch的回调函数
 */
Vue.prototype.$watch = function (exprOrFn, cb) {
    // exprOrFn 变化直接执行 cd 回调
    new Watcher(this, exprOrFn, { user: true }, cb)
}
```

watch 选项底层其实就是调用了 vm.$watch 方法，vm.$watch 也是暴露给用户使用的。调用这个方法的唯一作用就是创建了一个侦听器 watcher。exprOrFn 就是我们指定的依赖，cb 就是我们指定依赖变化后的回调函数。

来看 watcher 类：

```js
class Watcher {
    // vm watcher 对应的组件的实例，fn 组件对应的渲染函数
    constructor(vm, exprOrFn, options, cb) {
        // 使用 id 来区分不同组件的 watcher
        this.id = id++

        if (typeof exprOrFn === 'string') {
            // exprOrFn 若为字符串，改成函数
            this.getter = function () {
                return vm[exprOrFn]
            }
        } else {
            // 把渲染函数绑定watcher到实例上，调用getter即可重新渲染，更新视图
            this.getter = exprOrFn
        }


        // 标记是否是一个渲染watcher
        this.renderWatcher = options
        // 收集 watcher 对应的 dep
        this.deps = []
        // 使用 set 保存 deps 中所有 dep 的id，便于去重操作
        this.depsId = new Set()
        // 是否为懒 watcher
        this.lazy = options.lazy
        //计算属性的缓存值
        this.dirty = this.lazy
        // 初始化调用
        this.value = this.lazy ? undefined : this.get()
        // 记录 vm
        this.vm = vm
        // 记录回调
        this.cb = cb
        // 判断是不是用户自己创建的 watcher，也就是 watch 对应的 watcher
        this.user = options.user
    }

    // 执行传入的回调函数
    get() {
        // 在渲染开始之前，把 watcher 挂载到全局，也就是 Dep 类上（静态属性）
        pushTarget(this)
        let value = this.getter.call(this.vm);
        // 渲染结束，把当前的 watcher 出栈
        popTarget()
        return value
    }

    // 计算属性求值
    evaluate() {
        // 获取到用户定义的 get 方法的返回值
        this.value = this.get()
        this.dirty = false
    }
    // 计算属性用，让每一个计算属性的依赖收集上层 watcher
    depend() {
        for (let i = this.deps.length - 1; i >= 0; i--) {
            this.deps[i].depend(this)
        }
    }

    // 给 watch 添加 dep
    addDep(dep) {
        // 要判断这个 dep 是否已经被记录，防止重复记录
        let id = dep.id
        if (!this.depsId.has(id)) {
            // id 不存在与 depsId 中，则这个 dep 没有被 watcher 收集过
            this.deps.push(dep)
            this.depsId.add(id)
            // 让 dep 收集 watcher
            dep.addSub(this)
        }
    }

    // 更新视图
    update() {
        // 如果是计算属性依赖的值发生变化，标志脏值，下次取值会重新计算
        if (this.lazy) {
            this.dirty = true
        } else {
            // 把当前的 watcher 暂存在队列中
            queueWatcher(this)
        }
    }

    // 执行渲染逻辑
    run() {
        let oldValue = this.value
        let newValue = this.get()
        if (this.user) {
            this.cb.call(this.vm, oldValue, newValue)
        }
    }

}
```

我们创建侦听器 watcher 时，首先会将传入的 exprOrFn 依赖封装为初始化方法（如果传入的是函数则不需要封装），然后自动执行一次。执行时就会访问到依赖数据，依赖数据的 get 方法中就会收集到当前的侦听器 watcher。

所以，收集侦听器 watcher 的时机和其他 watcher 的时机不同。侦听器 watcher 的收集不依赖于 rander 函数去访问属性从而触发属性的 get 方法收集依赖，而是在创建 watch 的时候就进行初始化，在初始化的过程中，访问了我们指定的依赖，从而收集到了侦听器 watcher。所以，**侦听器 watcher 的收集是在初始化阶段，而不是渲染阶段。**

下面我们来看 run 方法，这就是 watcher 的更新回调。对于其他 watcher，执行 run 方法，就是调用了一下初始化方法 get。而对于侦听器 watcher ，执行的则是我们指定的回调 cb（callback）。

## 3. 总结 & 举例

**总结：**

1. 在初始化时创建了侦听器 watcher
2. 侦听器 watcher 会自动执行初始化方法，初始化方法就会访问到依赖，从而触发依赖的 get 方法，收集到侦听器 watcher。
3. 依赖数据发生变化，执行侦听器 watcher 的更新回调。对于其他 watcher，更新回调和初始化方法是同一个方法，但是对应侦听器 watcher，更新回调则是用户自定义的 watch 的回调。

**举例**：

对于这样一个侦听器：

```js
      watch: {
        firstName: [
          (newValue, oldValue) => {
            this.lastName = 1234
            console.log(this.lastName);
          }
        ]
      }
```

创建的 watcher 的初始化方法就是：

```js
function(){
    return vm.firstName
}
```

就只是简单访问了一下 vm 上的 firstName 而已，访问他的目的就是让依赖数据收集到当前这个侦听器 watcher。

创建的 watcher 的回调就是：

```js
 (newValue, oldValue) => {
            this.lastName = 1234
            console.log(this.lastName);
          }
```

就是用户自定义的回调！











