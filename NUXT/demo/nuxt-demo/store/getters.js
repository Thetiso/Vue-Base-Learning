const getters = {
    authed: (state, getters)=> {
        console.log(state, getters, getters['userModule/authed'])
        // console.log(state.userModule.authed)
        return getters['user/authed']
    },
    logined: (state, getters)=> {
        return getters['user/isLogined']
    }
}

export default getters
// import {mapGetters} from 'vuex'
// const getters = {
//     ...mapGetters('./modules/user/', [
//         'authed'
//     ])
// }
// export default  getters
