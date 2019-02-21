const mutations = {
    loginSuccess: (state, user)=> {
        //state 为模块的局部状态
        state.user = user
        console.log(state)
    },
    loginFail: (options)=> {
        console.log('=====登录失败=====')
    },
    updateStorage: (state) => {
        sessionStorage.setItem('user', JSON.stringify(state.user))
    },
    clearStorage: state => {
        state.user = {};
        sessionStorage.removeItem('user')
    },
}
export default mutations
