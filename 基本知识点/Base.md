## 基本教程
参考:https://cn.vuejs.org/v2/guide

## 核心考点
https://segmentfault.com/a/1190000016344599

## 兼容性
Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

## 生命周期
![vue的生命周期](https://cn.vuejs.org/images/lifecycle.png)

## 前端 - Vue.js
- 起步：https://cn.vuejs.org/v2/guide/
- vue全家桶：vue + vuex+ axios + vue-router + webpack + es6 + less
- axios使用示例：https://www.jianshu.com/p/a5fc834ea028
- 项目启动教程：https://www.cnblogs.com/ylboke/p/8393216.html
- 项目结构介绍：http://www.runoob.com/vue2/vue-directory-structure.html   
- 项目配置文件的详细介绍：https://www.cnblogs.com/real-me/p/9198870.html
- 调试工具/插件： https://www.cnblogs.com/momozjm/p/7098476.html
- axios拦截器：https://blog.csdn.net/well2049/article/details/85003062

## 单个页面使用Vue
- 无法使用require/import等来使用模块(@import引入css文件除外)
- 全局变量只能引入一下文件的方式来设置
```
//constant.js
if (!Vue.prototype.CONSTANT) {
	Vue.prototype.CONSTANT = {
		PAGE: {
			DEFAULT_SIZE:10,
			DEFAULT_INDEX:1,
		}
	} 
}
```
- 创建组件
```
<div id="app">
    <my-com></my-com>
</div>

<script src="vue.js"></script>
<script>

    let Component = Vue.extend({
        template:`
            <div>你好6666</div>
        `
    });

    Vue.component('my-com',Component);
    new Vue({
        el:'#app',
        data:{

        }
    });
</script>
//得注意组件名称的大小写
```

## 公共常量
https://www.jianshu.com/p/d18a51497c9d

## Vue.js - Mark
#### 1. 页面间传参
```
this.$router.push({path: ''/order/index''});
this.$router.push({path: '/order/page1',query:{ id:'2'}});
this.$router.push({name: '/order/page2',params:{ id:'6'}});
```

- 路由传参params 和query两种方式的区别：　
　
	1. 用法上的:
		1. 刚才已经说了，query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。    
		2. 注意接收参数的时候，已经是$route而不是$router了哦！！

	2. 展示上的:   
　　		1. `query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示`

3. 获取参数：{{this.$route.params.参数名}}

#### 2. 去除URL中的`#`
- 设置router
```
Vue.use(Router)
const router = new Router({
	mode: 'history',  ## 关键
	routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/test',
    	name: 'test',
    	component: TestComponent
    }
  ]
})
export default router
```
- 服务器上做适当配置


#### 3. data的两种方式
```
	import Vue from 'Vue'
	let app= new Vue({
	    el:"#app",
	    data:{
	        msg:'abc'
	    },
	  	computed: {
		    // 计算属性的 getter
		    reversedMessage: function () {
		      // `this` 指向 vm 实例
		      return this.msg.split('').reverse().join('')
		    }
	  	},
	    methods:{
	  		consoleSomething: function() {
	  			console.log('clicked!')
	  		},
	  		reversedMessageMethod: function() {
	  			return this.msg.split('').reverse().join('')
	  		}
	    }
	}),
...
export default{
	name: "test",
    data(){
        return {
            showLogin:true,
            // def_act: '/A_VUE',
            msg: 'hello vue',
            user:'',
            homeContent: false,
        }
    },
    methods:{
       
    }
}

```
1. 不使用return包裹的数据会在项目的全局可见，会造成变量污染
2. 使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。

#### 4. truthy
https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy


#### 5. v-if & v-show
- v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

- v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

- 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

- 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

#### 6. $emit 
调用父级组件的方法：https://blog.csdn.net/sllailcp/article/details/78595077

#### 7. $event
当前Dom节点

#### 8. ref
为子级元素/组件设置ref
```
<base-input ref="usernameInput"></base-input>
...
//调用
this.$refs.usernameInput.focus()
```

- 当 ref 和 v-for 一起使用的时候，你得到的引用将会是一个包含了对应数据源的这些子组件的数组。
- `$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。这只意味着一个直接的子组件封装的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。`

