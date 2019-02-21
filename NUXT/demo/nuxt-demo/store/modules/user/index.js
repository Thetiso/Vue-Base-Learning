import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
const user = {
    namespaced: true,
    state: state,
    getters : getters,
    actions,
    mutations,
}

export default user
