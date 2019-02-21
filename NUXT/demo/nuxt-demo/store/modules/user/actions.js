const actions = {
    login: ({dispatch, commit, getters, rootGetters})=> {
        //异步发送请求
        let success = Math.random() >= 0.5;
        if (success) {
            let user = {
                nickname: '张三',
                gender: 1,
                id: 1,
                type: 0,
                avatar: '',
            }
            commit('loginSuccess', user)
            commit('updateStorage')
        } else {
            commit('loginFail')
            commit('clearStorage')
        }

    }
}
export default actions
