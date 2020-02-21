---
sidebar: auto
sidebarDepth: 2
next: ./array
prev: ./
---

# Vuex
## 组件间共享数据方式
- 父传子: v-bind 属性绑定
- 子传父: v-on 事件绑定
- 兄弟共享: EventBus
    + $on 接受数据的组件
    + $emit 发送数据的组件
## Vuex是什么
- 实现组件全局状态(数据)管理的一种机制, 可以方便的实现组件之间数据共享
## 优点
- 在 Vuex 中集中管理共享的数据, 易于开发和后期维护
- 能高效地实现组件之间的数据共享, 提高开发效率
- Vuex 中的数据都是响应式的, 能够实时保持数据与页面的同步
## 适用场景
- 一般情况下, 只有组件之间共享的数据才有必要存到 Vuex 中, 组件私有数据, 存在自身的 data 中
## 基本使用
```
// 安装 vuex
npm install vuex --save
// main.js 中导入
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建 store 对象
const store = new Vuex.Store({
  // state 中存放的就是全局共享的数据
  state: { count: 0 }
})
// 将 store 对象挂载到 vue 实例中
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  // 将创建的共享数据对象, 挂载到 Vue 实例中
  // 所有的组件, 就可以直接从 store 中获取全局的数据了
  store
})
```
## 核心概念
### State
- 定义: 唯一公共数据源，所有共享的数据都要统一放到 Store 里的 State 中进行存储
    ```javascript
        // 创建 store 数据源, 提供唯一公共数据
        const store = new Vuex.Store({
          state: { count: 0 }
        })
    ```
- 访问 State 中数据的方式
    + this.$store.state.[全局数据名称]
    ```javascript
      this.$store.state.count
    ```
    + vuex 方法
    ```javascript
      // 从 vuex 中按需导入 mapState 函数
      import { mapState } from 'vuex'
      // 通过导入的函数将当前组件需要的全局数据, 映射为当前组件的 computed 计算属性
      computed: {
        ...mapState([ 'count' ])
      } 
    ```
### Mutation
- Vue 不允许在组件里修改 Store 里的数据, Mutation 用于变更数据
- 可以集中监控所有数据的变化
    ```javascript
      // 定义 Mutation
      const store = new Vuex.Store({
        mutations: {
          add(state) {
            // 变更状态
            state.count++
          }   
        } 
      })
  
      // 触发 Mutation
      methods: {
        handle() {
          // 触发方式 1
          this.$store.commit('add')
        }   
      }
    ```
- 传参
```javascript
    mutations: {
      addN(state, step) {
        // 变更状态
        state.count += step
      }   
    } 
    handle() {
      // 触发方式 1
      this.$store.commit('addN', 3)
    }   
```
- 触发方式 2
```javascript
  // 从 vuex 中按需导入 mapMutations 函数
  import { mapMutations } from "vuex"
  // 把需要的 mutations 函数映射为当前组件的 methods 方法
  methods: {
    ...mapMutations([ 'add', 'addN' ])
  }
```
- mutatios 里面不能使用异步方法
### Action
- 处理异步任务, 但是还是需要通过触发 Mutation 的方式间接变更数据
- 基本使用
```javascript
  const store = new Vuex.store({
    mutatios: {
      add(state) {
        state.count++
      }
    },
    actions: {
      addAsync(context) {
        setTimeout(() => {
          context.commit('add')
        }, 1000)
      }
    }
  })

  // 触发 Action
  handle() {
    // 方式 1
    this.$store.dispatch('addAsync')
  }
```
- 传参方式和 Mutation 一样
- 触发方式 2
```javascript
  // 从 vuex 中导入 mapActions 函数
  import { mapActions } from "vuex"
  // 映射成当前组件的方法
  methods: {
    ...mapActions( [ 'addAsync' ] )
  }
```
### Getter
- 用于对 Store 中的数据进行加工处理成新的数据
    + 类似 Vue 的计算属性
    + Store 中的数据发生变化, Getter 的数据也会跟着变化
    ```javascript
      // 定义 Getter
      const store = new Vuex.Store({
        state: {
          count: 0
        },
        getters: {
          showNum: state => {
            return '当前最新的数量是['+ state.count +']'
          }
        }
      })
    ```
- 触发方式一样
