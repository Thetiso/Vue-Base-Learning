import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

//组装模块，导出stroe
const store = ()=> {
    return new Vuex.Store({
        strict: process.env.NODE_ENV == 'production',
        state: {
            counter: 0,
        },
        mutations,   //不可以执行异步数据提交
        // mutations: {
        //     increment(state) {
        //         state.counter ++
        //     }
        // },
        actions,
        // actions: {
        //     //允许数据异步提交
        //     increment: function(context) {
        //         context.commit('increment')
        //     },
        //     incrementAsync: function({commit}) {
        //         setTimeout(()=> {
        //             console.log('timer here')
        //             commit('increment')
        //         }, 1000)
        //     },
        //     incrementAsync2: function ({commit}) {
        //         commit('increment')
        //     }
        // }
        getters,
        modules,
    })
}

export default  store



// const store = new Vuex.Store({
//     modules: {
//         account: {
//             namespaced: true,
//
//             // 模块内容（module assets）
//             state: { ... }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
//             getters: {
//                 isAdmin () { ... } // -> getters['account/isAdmin']
//             },
//             actions: {
//                 login () { ... } // -> dispatch('account/login')
//             },
//             mutations: {
//                 login () { ... } // -> commit('account/login')
//             },
//
//             // 嵌套模块
//             modules: {
//                 // 继承父模块的命名空间
//                 myPage: {
//                     state: { ... },
//                     getters: {
//                         profile () { ... } // -> getters['account/profile']
//                     }
//                 },
//
//                 // 进一步嵌套命名空间
//                 posts: {
//                     namespaced: true,
//
//                     state: { ... },
//                     getters: {
//                         popular () { ... } // -> getters['account/posts/popular']
//                     }
//                 }
//             }
//         }
//     }
// })
