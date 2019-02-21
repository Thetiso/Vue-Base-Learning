//跟级别的actions

const actions = {
    //允许数据异步提交
    increment: function(context) {
        context.commit('increment')
    },
    incrementAsync: function({commit}) {
        setTimeout(()=> {
            console.log('timer here')
            commit('increment')
        }, 1000)
    },
    incrementAsync2: function ({commit}) {
        commit('increment')
    }
}
export default  actions
