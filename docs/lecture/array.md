---
sidebar: auto
sidebarDepth: 2
next: ./
prev: ./vuex
---

# 数组常用方法
## map
:::tip 技巧
  将数组中的每个元素调用一个提供的函数, 结果作为一个新的数组返回, 并没有改变原来的数组
:::  
[类似于vue计算属性](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/map.png)
## forEach
:::tip 技巧
  没有返回值, 改变原数组
:::  
[map的不要脸版本](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/foreach.png)
## filter
:::tip 技巧
  不改变原数组, 返回满足条件的
:::  
[过滤器](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/filter.png)
## every
:::tip 技巧
  所有元素都满足条件才返回 true
:::  
[与运算](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/every.png)
## some
:::tip 技巧
  只要有元素都满足条件就返回 true
:::  
[或运算](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/some.png)
## reduce
:::tip 技巧
  接受的参数是一个有返回值的函数, 遍历完毕返回最后的结果
:::  
[迭代器](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/reduce.png)
## crud
:::tip 技巧
  .pop() 尾部删除
  .shift() 头部删除
  .push() 尾部添加
  .unshift() 头部添加
:::  
## isArray
:::tip 技巧
  判断是不是一个数组, 返回 Boolean
:::  
## concat
:::tip 技巧
  拼接数组
:::  
[拼接](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/concat.png)
## toString
:::tip 技巧
  把数组变成逗号分割的字符串
:::  
[类型转化](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/tostring.png)
## join
:::tip 技巧
  把数组变成自定义符号分割的字符串
:::  
[类型转化](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/join.png)
## splice
:::tip 技巧
  增删改于一体, 返回被cue 的元素数组
:::  
[增](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/splice_add.png)  
[删](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/splice_del.png)  
[改](https://cdn.jsdelivr.net/gh/coolinovo/CDN@1.3.1/lecture/array/splice_replace.png)