---
sidebar: auto
sidebarDepth: 2
next: ./vuex
---

# 归档
## SPA 优化
### 日常前戏
- 最近做了一个 vue 的 [SPA 项目](https://www.coolin.club/vue/), 打包的时候在 GUI 界面提示一个☠符号, 暗示项目存在太大的包了, 比如 element-ui 库, chunk-vendors.js 等等各种各样复杂的模块包, 一个个的好几个 MB, 身为一个正经的前端怎么允许一丢丢的 warning???然后我就开始了我压缩压缩再压缩的踩坑之旅...做一件事情之前, 我们首先要想明白从哪里入手, what can we do???呐, 我按着自己的理解大致把优化流程分为了一下几个环节, 高手话不多, 上方案！
### 生成项目打包报告
- 这一步可有可无, 主要是为了更严谨的分清楚项目中究竟存在哪些 warning 以及待优化项
    + 通过 vue-cli 命令生成
    ```
    // report.html
    vue-cli-service build --report
    ```
  + vue 官方提供的可视化面板生成直接查看
    * 在打包后的文件中我们可以看到, 所有的文件都是从上到下按照文件大小排序的, 超过 500KB 的都会标黄, (我的项目已经优化完了, 懒得重现)
### 移除打包后项目中的 console.log()
::: danger
vue 打包时是不允许在项目中调用 console.log() 方法的, 我们需要通过 babel 的一个插件来移除
:::
  + 安装 babel 插件
  ```
   npm i -D babel-plugin-transform-remove-console
  ```
  + 配置 babel.config.js 文件
 ```javascript
    // 项目发布阶段需要用到的插件
    // 按环境来动态加载插件
    const prodPlugins = []
    if (process.env.NODE_ENV === 'production') {
      prodPlugins.push('transform-remove-console')
    }
    module.exports = {
      plugins: [
        ...prodPlugins
      ]
    }
  ```
### 为开发/发布模式指定不用的打包入口
  + 默认情况下, 开发和发布模式都是公用一个 main.js 入口文件
   * 指定开发模式的入口文件为 src/main-dev.js
     - 通过 chainWebpack 自定义打包入口
   ```javascript
    module.exports = {
      chainWebpack: config => {
        config.when(process.env.NODE_ENV === 'production', config => {
          // 生产模式
          config.entry('app').clear().add('./src/main-prod.js')
        })
        config.when(process.env.NODE_ENV === 'development', config => {
          // 开发模式
         config.entry('app').clear().add('./src/main-dev.js')
        })
      }
    }
   ```
   * 指定发布模式的入口文件为 src/main-prod.js


### 通过第三方库启用 CDN

  + 通过配置 webpack 的 externals 节点来配置加载外部的 CDN, 在 externals 中的第三方依赖都不会被打包！！

    :::tip
    vue-cli@3 已经隐藏了 webpack.config.js, 我们需要在项目根目录生成一个 vue.config.js 来覆盖 webpack 的配置 
    :::
    ```javascript
      config.set('externals', {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          lodash: '_',
          echarts: 'echarts',
          nprogress: 'NProgress',
          'vue-quill-editor': 'VueQuillEditor'
      })
    ```
### element-ui 组件按需加载
  + element-ui 也是通过 CDN 的形式引入全局使用的, 所以我们需要在 main.prod.js 中删除导入 element-ui 的代码段(否则会报错, 组件被重复定义)
  + 随后在 /public/index.html 头部添加 CDN 链接
  ```html
   <!-- element-ui 的样式表 -->
   <link rel="stylesheet" href="cdn.example.com/element-ui/2.8.2/index.css" /> 
   <!-- element-ui 的 js 文件 -->
   <script src="cdn.example.com/element-ui/2.8.2/index.js"></script>
  ```
### 路由懒加载
  + 安装 babel 插件
  ```
    npm i -D babel/plugin-syntax-dynamic-import
  ```
  + 配置 babel.config.js
  ```javascript
    {
      "plugins": ["@babel/plugin-syntax-dynamic-import"]
    }
  ```
  + 修改路由代码
  ```javascript
    const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
    const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
    const Baz = () => import(/* webpackChunkName: "group-boo" */ './Baz.vue')
  ```
### 首页内容定制
  + 不用的打包环境下, 首页内容不应该相同
  ::: tip
    我们可以通过插件的方式进行定制
  :::
  ```javascript
    // vue.config.js
    chainWebpack: config => {
      config.when(process.env.NODE_ENV === 'production', config => {
        // 生产模式
        config.plugin('html').tap(args => {
          args[0].isProd = true
          return args
        })  
      })
        config.when(process.env.NODE_ENV === 'development', config => {
        // 开发模式
        config.plugin('html').tap(args => {
          args[0].isProd = false
          return args
        })  
      })
    }
  ```
  ```html
    <!-- /public/index.html -->
    <title><%= htmlWebpackPlugin.options.isProd?'': 'dev - ' %></title>
    <!-- 按需加载外部的 CDN 资源 -->
    <% if (htmlWebpackPlugin.options.isProd) { %>
    <link/>
    <script/>
    <% } %>
  ```


