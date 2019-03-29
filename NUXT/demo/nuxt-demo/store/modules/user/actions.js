import axios from 'axios'
const actions = {
    login: ({dispatch, commit, getters, rootGetters})=> {
        //异步发送请求

        axios.post('http://115.28.77.147:9081/api/uc/user/login/mobile',{
                mobile: '13732201020',
                password: 'ed2b1f468c5f915f3f1cf75d7068baae'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

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

    },
    asyncLogin: ({dispatch, commit, getters, rootGetters})=> {
        axios.post('http://115.28.77.147:9081/api/uc/user/login/mobile',{
                mobile: '13732201020',
                password: 'ed2b1f468c5f915f3f1cf75d7068baae'
            })
            .then(function (response) {
                commit('loginSuccess', response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
export default actions
