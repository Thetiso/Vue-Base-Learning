const  getters = {
    authed: (state, getters, rootState, rootGetters)=> {
        let userString = '';// sessionStorage.getItem('user');
        let user = !!userString ? JSON.parse(userString) : {};
        let authed = false;
        if (!!user) {
            state.user = user;
            authed = true;
        }
        return authed;
    }
}
export default getters
//
// const getters = {
//     authed: (state)=> {
//         return !false
//     }
// }
//
// export default getters
